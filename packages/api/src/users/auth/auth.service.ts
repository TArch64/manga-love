import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { v4 as generateUUID } from 'uuid';
import { PasswordResetsRepository, UsersRepository } from '../repository';
import { PublicUrlService, TypedError } from '../../core';
import { DatabasePasswordReset, DatabaseUser, handleUniqueConstrain } from '../../prisma';
import { MailerService } from '../../mailer';
import { ResetPasswordMail } from './emails';
import { AuthPasswordService } from './auth-password.service';

export type TokenPayload = { userId: string };

export interface ResetPasswordState {
    isValid: boolean;
    email: string | null;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly passwordResetsRepository: PasswordResetsRepository,
        private readonly jwtService: JwtService,
        private readonly mailerService: MailerService,
        @Inject(PublicUrlService.STOREFRONT)
        private readonly storefrontUrl: PublicUrlService,
        private readonly passwordService: AuthPasswordService
    ) {}

    public async signIn(email: string, password: string): Promise<string>  {
        if (!email || !password) this.throwUnauthorizedException();

        const user = await this.usersRepository.getUserByEmail(email);
        const isMatchPassword = user && await this.passwordService.compare(password, user.password);

        if (!isMatchPassword) this.throwUnauthorizedException();

        return this.encodeToken(user);
    }

    private throwUnauthorizedException(): never {
        throw new TypedError('bad-credentials', 401);
    }

    private encodeToken(user: DatabaseUser): string {
        return this.jwtService.sign({ userId: user.id });
    }

    public async signUp(user: Omit<DatabaseUser, 'id'>): Promise<string> {
        if (!user.email || !user.password || !user.username) {
            throw new TypedError('invalid-request');
        }

        user.password = await this.passwordService.encrypt(user.password);
        const created = await this.usersRepository.create(user);

        try {
            return this.encodeToken(created);
        } catch (error: unknown) {
            handleUniqueConstrain(error);
        }
    }

    public async askResetPassword(email: string): Promise<void> {
        const user = await this.usersRepository.getUserByEmail(email);

        if (!user) {
            throw new TypedError('invalid-email');
        }

        const passwordReset = await this.passwordResetsRepository.create(user, generateUUID());
        await this.sendResetPasswordEmail(passwordReset);
    }

    private async sendResetPasswordEmail(passwordReset: DatabasePasswordReset): Promise<void> {
        const resetUrl = this.storefrontUrl.resolve(['auth/reset-password'], { code: passwordReset.code });
        const mail = new ResetPasswordMail(passwordReset.email, resetUrl);

        await this.mailerService.send(mail);
    }

    public async getResetPasswordState(code: string): Promise<ResetPasswordState> {
        const passwordReset = await this.passwordResetsRepository.getByCode(code);

        return {
            isValid: !!passwordReset,
            email: passwordReset?.email || null
        };
    }

    public async resetPassword(code: string, password: string): Promise<string> {
        const passwordReset = await this.passwordResetsRepository.getByCode(code);

        if (!passwordReset || !password) {
            throw new TypedError('unknown');
        }

        const user = await this.usersRepository.getUserByEmail(passwordReset.email);
        await this.usersRepository.update(user.id, {
            password: await this.passwordService.encrypt(password)
        });

        await this.passwordResetsRepository.deleteByUser(user);

        return this.encodeToken(user);
    }
}
