import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserActionsRepository, UsersRepository } from '../repository';
import { PublicUrlService, TypedError } from '../../core';
import { DatabaseUser, DatabaseUserAction, DatabaseUserActionType, Prisma, handleUniqueConstrain } from '../../prisma';
import { MailerService } from '../../mailer';
import { EmailVerificationMail } from './emails';
import { AuthPasswordService } from './auth-password.service';
import { AuthTokenService } from './auth-token.service';

interface GoogleUser {
    email: string;
    email_verified: string;
    name: string;
    picture: string;
    aud: string;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly userActionsRepository: UserActionsRepository,
        private readonly jwtService: JwtService,
        private readonly mailerService: MailerService,
        @Inject(PublicUrlService.STOREFRONT)
        private readonly storefrontUrl: PublicUrlService,
        private readonly passwordService: AuthPasswordService,
        private readonly authTokenService: AuthTokenService
    ) {}

    public async signIn(email: string, password: string): Promise<string>  {
        if (!email || !password) this.throwUnauthorizedException();

        const user = await this.usersRepository.getUserByEmail(email);
        const isMatchPassword = user && await this.passwordService.compare(password, user.password);

        if (!isMatchPassword) this.throwUnauthorizedException();

        return this.authTokenService.encodeToken(user);
    }

    private throwUnauthorizedException(): never {
        throw new TypedError('bad-credentials', 401);
    }

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

    public async sendEmailVerificationEmail(user: DatabaseUser, action: DatabaseUserAction): Promise<void> {
        const resetUrl = this.storefrontUrl.resolve(['auth/email-verification'], { code: action.code });
        const mail = new EmailVerificationMail(user.email, resetUrl);

        await this.mailerService.send(mail);
    }

    public async googleSignIn(credentials: string): Promise<string> {
        const googleUser = await this.jwtService.decode(credentials) as GoogleUser;

        if (googleUser?.aud !== process.env.API_GOOGLE_ID) {
            this.throwUnauthorizedException();
        }

        const user = await this.fetchGoogleUser(googleUser);

        return this.authTokenService.encodeToken(user);
    }

    private async fetchGoogleUser(googleUser: GoogleUser): Promise<DatabaseUser> {
        const existingUser = await this.usersRepository.getUserByEmail(googleUser.email);

        return existingUser || this.usersRepository.create({
            password: '',
            email: googleUser.email,
            username: googleUser.name,
            emailConfirmed: true
        });
    }
}
