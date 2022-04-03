import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UsersRepository } from '../repository';
import { TokenPayload } from './auth.service';
import { CurrentUser } from './current-user.decorator';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private readonly usersRepository: UsersRepository) {
        super({
            jwtFromRequest(request: Request): string {
                return request.signedCookies.auth;
            },
            ignoreExpiration: false,
            secretOrKey: process.env.API_SECRET
        });
    }

    public async validate(payload: TokenPayload): Promise<CurrentUser> {
        const { password, ...user } = await this.usersRepository.getUserById(payload.userId);
        return user;
    }
}
