import { Inject, Injectable } from '@nestjs/common';
import { handleUniqueConstrain, Prisma, UserActionsRepository, UsersRepository } from '@manga-love/database';
import { PublicUrlService } from '@manga-love/core';
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
        private readonly emailVerificationService: EmailVerificationService,
        @Inject(PublicUrlService.CDN)
        private readonly cdnUrlService: PublicUrlService
    ) {}

    public async signUp(input: Prisma.DatabaseUserCreateInput): Promise<string> {
        try {
            input.password = await this.passwordService.encrypt(input.password);

            input.avatar = {
                create: {
                    originalSrc: this.generateAvatarUrl(),
                    originalWidth: 400,
                    originalHeight: 400
                }
            };

            const user = await this.usersRepository.create(input);

            await this.emailVerificationService.sendEmail(user);
            return this.authTokenService.encodeToken(user);
        } catch (error: unknown) {
            handleUniqueConstrain(error);
        }
    }

    private generateAvatarUrl(): string {
        const avatarId = Math.floor(Math.random() * 10);
        return this.cdnUrlService.resolve(`default-avatars/avatar-${avatarId}.jpg`);
    }
}
