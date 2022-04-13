import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { v4 as generateUUID } from 'uuid';
import { PasswordResetsRepository, UsersRepository } from '../repository';
import { PublicUrlService, TypedError } from '../../core';
import { DatabasePasswordReset, DatabaseUser, isUniqueConstrain } from '../../prisma';
import { MailerService } from '../../mailer';
import { ResetPasswordMail } from './emails';

export type TokenPayload = { userId: string };

export interface ResetPasswordState {
    isValid: boolean;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly passwordResetsRepository: PasswordResetsRepository,
        private readonly jwtService: JwtService,
        private readonly mailerService: MailerService,
        @Inject(PublicUrlService.STOREFRONT)
        private readonly storefrontUrl: PublicUrlService
    ) {}

    public async signIn(email: string, password: string): Promise<string>  {
        if (!email || !password) this.throwUnauthorizedException();

        const user = await this.usersRepository.getUserByEmail(email);

        if (!user || !(await compare(password, user.password))) {
            this.throwUnauthorizedException();
        }

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

        try {
            return this.encodeToken(await this.usersRepository.create(user));
        } catch (error: unknown) {
            if (!isUniqueConstrain(error)) {
                throw error;
            }
            const [column] = error.meta.target;
            throw new TypedError(`${column}-already-taken`);
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
        return { isValid: !!passwordReset };
    }
}
