import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { PublicUrlService, TypedError } from '@manga-love/core';
import { UserActionsRepository, UsersRepository } from '../repository';
import { DatabaseUserActionType, DatabaseUser } from '../../prisma';
import { MICROSERVICES } from '../../microservices.config';
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
        @Inject(MICROSERVICES.MAILER)
        private readonly mailerService: ClientProxy,
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

        await this.sendResetPasswordEmail(user);
    }

    private async sendResetPasswordEmail(user: DatabaseUser): Promise<void> {
        const action = await this.userActionsRepository.create(user, DatabaseUserActionType.RESET_PASSWORD);
        const resetUrl = this.storefrontUrl.resolve(['auth/reset-password'], { code: action.code });

        await firstValueFrom(this.mailerService.send('send', {
            email: user.email,
            subject: 'Reset account password',
            template: {
                name: 'auth/reset-password',
                data: { resetUrl }
            }
        }));
    }

    public async getResetPasswordState(code: string): Promise<ResetPasswordState> {
        const action = await this.userActionsRepository.getByCode(code);

        return { isValid: !!action };
    }

    public async resetPassword(code: string, password: string): Promise<string> {
        const action = await this.userActionsRepository.getByCode(code);

        if (!action) {
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
