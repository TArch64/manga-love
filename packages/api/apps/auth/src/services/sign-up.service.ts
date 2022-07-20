import { Inject, Injectable } from '@nestjs/common';
import { handleUniqueConstrain, Prisma, UserActionsRepository, UsersRepository } from '@manga-love/database';
import { PublicUrlService } from '@manga-love/core';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES } from '../microservices.config';
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
        private readonly cdnUrlService: PublicUrlService,
        @Inject(MICROSERVICES.MANGA_LIBRARY)
        private readonly mangaLibraryService: ClientProxy
    ) {}

    public async signUp(input: Prisma.DatabaseUserCreateInput): Promise<string> {
        try {
            input.password = await this.passwordService.encrypt(input.password);
            input.avatar = { create: this.createAvatar() };

            const user = await this.usersRepository.create(input);

            await firstValueFrom(this.mangaLibraryService.send('create-defaults', user));
            await this.emailVerificationService.sendEmail(user);

            return this.authTokenService.encodeToken(user);
        } catch (error: unknown) {
            handleUniqueConstrain(error);
        }
    }

    private createAvatar(): Prisma.DatabaseImageCreateWithoutTargetUserAvatarInput {
        const avatarId = Math.floor(Math.random() * 10);
        const url = this.cdnUrlService.resolve(`default-avatars/avatar-${avatarId}.jpg`);

        return { originalSrc: url, originalWidth: 400, originalHeight: 400 };
    }
}
