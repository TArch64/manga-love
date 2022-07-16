import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypedError } from '@manga-love/api-core';
import { UsersRepository } from '../repository';
import { DatabaseUser } from '../../prisma';
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
export class SignInService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly jwtService: JwtService,
        private readonly passwordService: AuthPasswordService,
        private readonly authTokenService: AuthTokenService
    ) {}

    public async signIn(email: string, password: string): Promise<string>  {
        const user = await this.usersRepository.getUserByEmail(email);
        const isMatchPassword = user && await this.passwordService.compare(password, user.password);

        if (!isMatchPassword) this.throwUnauthorizedException();

        return this.authTokenService.encodeToken(user);
    }

    private throwUnauthorizedException(): never {
        throw new TypedError('bad-credentials', 401);
    }

    public async googleSignIn(credentials: string): Promise<string> {
        const googleUser = await this.jwtService.decode(credentials) as GoogleUser;

        if (googleUser?.aud !== process.env.API_AUTH_GOOGLE_ID) {
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
