import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { PublicUrlService } from '@manga-love/core';
import { DatabaseUser, DatabaseUserActionType, UserActionsRepository, UsersRepository } from '@manga-love/database';
import { MICROSERVICES } from '../microservices.config';

export interface EmailVerificationState {
    isValid: boolean;
    username: string;
}

@Injectable()
export class EmailVerificationService {
    constructor(
        @Inject(MICROSERVICES.MAILER)
        private readonly mailerService: ClientProxy,
        @Inject(PublicUrlService.STOREFRONT)
        private readonly storefrontUrl: PublicUrlService,
        private readonly userActionsRepository: UserActionsRepository,
        private readonly usersRepository: UsersRepository
    ) {}

    public async verifyEmail(code: string): Promise<void> {
        const action = await this.userActionsRepository.getByCode(code);

        if (!action) {
            throw new RpcException('unknown');
        }

        const user = await this.usersRepository.getUserById(action.userId);
        await this.usersRepository.update(action.userId, { emailConfirmed: true });
        await this.userActionsRepository.deleteByType(user, DatabaseUserActionType.EMAIL_VERIFICATION);
    }

    public async getVerificationState(code: string): Promise<EmailVerificationState> {
        const action = await this.userActionsRepository.getByCode(code);
        const user = action?.userId && await this.usersRepository.getUserById(action.userId);

        return {
            isValid: !!action,
            username: user?.username ?? ''
        };
    }

    public async sendEmail(user: DatabaseUser): Promise<void> {
        const action = await this.userActionsRepository.create(user, DatabaseUserActionType.EMAIL_VERIFICATION);
        const verificationUrl = this.storefrontUrl.resolve(['auth/email-verification'], { code: action.code });

        await firstValueFrom(this.mailerService.send('send', {
            email: user.email,
            subject: 'Email Verification',
            template: {
                name: 'auth/email-verification',
                data: { verificationUrl }
            }
        }));
    }
}
