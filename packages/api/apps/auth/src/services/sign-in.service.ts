import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseUser, DatabaseImage, UsersRepository } from '@manga-love/database';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import { MICROSERVICES } from '../microservices.config';
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
        private readonly authTokenService: AuthTokenService,
        @Inject(MICROSERVICES.UPLOADER)
        private readonly uploaderService: ClientProxy
    ) {}

    public async signIn(email: string, password: string): Promise<string>  {
        const user = await this.usersRepository.getUserByEmail(email);
        const isMatchPassword = user && await this.passwordService.compare(password, user.password);

        if (!isMatchPassword) this.throwUnauthorizedException();

        return this.authTokenService.encodeToken(user);
    }

    private throwUnauthorizedException(): never {
        throw new RpcException('bad-credentials');
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
        return existingUser || this.createGoogleUser(googleUser);
    }

    private async createGoogleUser(googleUser: GoogleUser): Promise<DatabaseUser> {
        const uploadingAvatar = this.uploaderService.send<DatabaseImage>('import', googleUser.picture);
        const avatar = await firstValueFrom(uploadingAvatar);

        return this.usersRepository.create({
            password: '',
            email: googleUser.email,
            username: googleUser.name,
            emailConfirmed: true,

            avatar: {
                connect: { id: avatar.id }
            }
        });
    }
}
