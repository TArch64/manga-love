import { Injectable } from '@nestjs/common';
import { handleUniqueConstrain, Prisma, UserActionsRepository, UsersRepository } from '@manga-love/database';
import { AuthPasswordService } from './auth-password.service';
import { AuthTokenService } from './auth-token.service';
import { EmailVerificationService } from './email-verification.service';

@Injectable()
export class SignUpService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly userActionsRepository: UserActionsRepository,
        private readonly passwordService: AuthPasswordService,
        private readonly authTokenService: AuthTokenService,
        private readonly emailVerificationService: EmailVerificationService
    ) {}

    public async signUp(input: Prisma.DatabaseUserCreateInput): Promise<string> {
        try {
            input.password = await this.passwordService.encrypt(input.password);
            const user = await this.usersRepository.create(input);

            await this.emailVerificationService.sendEmail(user);
            return this.authTokenService.encodeToken(user);
        } catch (error: unknown) {
            handleUniqueConstrain(error);
        }
    }
}
