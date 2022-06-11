import { Inject, Injectable } from '@nestjs/common';
import { UserActionsRepository, UsersRepository } from '../repository';
import { PublicUrlService, TypedError } from '../../core';
import { DatabaseUserAction, DatabaseUserActionType, DatabaseUser } from '../../prisma';
import { MailerService } from '../../mailer';
import { ResetPasswordMail } from './emails';
import { AuthPasswordService } from './auth-password.service';
import { AuthTokenService } from './auth-token.service';

export interface ResetPasswordState {
    isValid: boolean;
}

@Injectable()
export class PasswordResetService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly userActionsRepository: UserActionsRepository,
        private readonly mailerService: MailerService,
        @Inject(PublicUrlService.STOREFRONT)
        private readonly storefrontUrl: PublicUrlService,
        private readonly passwordService: AuthPasswordService,
        private readonly authTokenService: AuthTokenService
    ) {}

    public async askResetPassword(email: string): Promise<void> {
        const user = await this.usersRepository.getUserByEmail(email);

        if (!user) {
            throw new TypedError('invalid-email');
        }

        const action = await this.userActionsRepository.create(user, DatabaseUserActionType.RESET_PASSWORD);
        await this.sendResetPasswordEmail(user, action);
    }

    private async sendResetPasswordEmail(user: DatabaseUser, action: DatabaseUserAction): Promise<void> {
        const resetUrl = this.storefrontUrl.resolve(['auth/reset-password'], { code: action.code });
        const mail = new ResetPasswordMail(user.email, resetUrl);

        await this.mailerService.send(mail);
    }

    public async getResetPasswordState(code: string): Promise<ResetPasswordState> {
        const action = await this.userActionsRepository.getByCode(code);

        return { isValid: !!action };
    }

    public async resetPassword(code: string, password: string): Promise<string> {
        const action = await this.userActionsRepository.getByCode(code);

        if (!action || !password) {
            throw new TypedError('unknown');
        }

        const user = await this.usersRepository.getUserById(action.userId);

        await this.usersRepository.update(user.id, {
            password: await this.passwordService.encrypt(password)
        });

        await this.userActionsRepository.deleteByType(user, action.type);

        return this.authTokenService.encodeToken(user);
    }
}
