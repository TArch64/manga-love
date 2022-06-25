import { Inject, Injectable } from '@nestjs/common';
import { MailerService } from '../../mailer';
import { PublicUrlService } from '../../core';
import { DatabaseUser, DatabaseUserActionType } from '../../prisma';
import { UserActionsRepository, UsersRepository } from '../repository';
import { EmailVerificationMail } from './emails';

export interface EmailVerificationState {
    isValid: boolean;
    name: string;
}

@Injectable()
export class EmailVerificationService {
    constructor(
        private readonly mailerService: MailerService,
        @Inject(PublicUrlService.STOREFRONT)
        private readonly storefrontUrl: PublicUrlService,
        private readonly userActionsRepository: UserActionsRepository,
        private readonly usersRepository: UsersRepository
    ) {}

    public async getVerificationState(code: string): Promise<EmailVerificationState> {
        const action = await this.userActionsRepository.getByCode(code);
        const user = action?.userId && await this.usersRepository.getUserById(action.userId);

        return {
            isValid: !!action,
            name: user?.username ?? ''
        };
    }

    public async sendEmail(user: DatabaseUser): Promise<void> {
        const action = await this.userActionsRepository.create(user, DatabaseUserActionType.EMAIL_VERIFICATION);
        const resetUrl = this.storefrontUrl.resolve(['auth/email-verification'], { code: action.code });
        const mail = new EmailVerificationMail(user.email, resetUrl);

        await this.mailerService.send(mail);
    }
}
