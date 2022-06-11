import { Inject, Injectable } from '@nestjs/common';
import { UserActionsRepository, UsersRepository } from '../repository';
import { MailerService } from '../../mailer';
import { PublicUrlService, TypedError } from '../../core';
import { DatabaseUser, DatabaseUserAction, DatabaseUserActionType, handleUniqueConstrain, Prisma } from '../../prisma';
import { AuthPasswordService } from './auth-password.service';
import { AuthTokenService } from './auth-token.service';
import { EmailVerificationMail } from './emails';

@Injectable()
export class SignUpService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly userActionsRepository: UserActionsRepository,
        private readonly mailerService: MailerService,
        @Inject(PublicUrlService.STOREFRONT)
        private readonly storefrontUrl: PublicUrlService,
        private readonly passwordService: AuthPasswordService,
        private readonly authTokenService: AuthTokenService
    ) {}

    public async signUp(input: Prisma.DatabaseUserCreateInput): Promise<string> {
        if (!input.email || !input.password || !input.username) {
            throw new TypedError('invalid-request');
        }

        try {
            input.password = await this.passwordService.encrypt(input.password);
            const user = await this.usersRepository.create(input);
            const action = await this.userActionsRepository.create(user, DatabaseUserActionType.EMAIL_VERIFICATION);

            await this.sendEmailVerificationEmail(user, action);

            return this.authTokenService.encodeToken(user);
        } catch (error: unknown) {
            handleUniqueConstrain(error);
        }
    }

    private async sendEmailVerificationEmail(user: DatabaseUser, action: DatabaseUserAction): Promise<void> {
        const resetUrl = this.storefrontUrl.resolve(['auth/email-verification'], { code: action.code });
        const mail = new EmailVerificationMail(user.email, resetUrl);

        await this.mailerService.send(mail);
    }
}
