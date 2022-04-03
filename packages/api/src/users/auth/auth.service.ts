import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsersRepository } from '../repository';
import { CurrentUser } from './current-user.decorator';

export type TokenPayload = { userId: string };

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly jwtService: JwtService
    ) {}

    public async signIn(email: string, password: string): Promise<string>  {
        if (!email || !password) this.throwUnauthorizedException();

        const user = await this.usersRepository.getUserByEmail(email);

        if (!user || !(await compare(password, user.password))) {
            this.throwUnauthorizedException();
        }

        return this.jwtService.sign({ userId: user.id });
    }

    private throwUnauthorizedException(): never {
        const error = new UnauthorizedException();

        error.message = 'Bad Credentials';
        throw error;
    }

    public async decodeToken(token: string): Promise<CurrentUser | null> {
        if (!token) return null;

        try {
            const payload = this.jwtService.decode(token) as TokenPayload;
            const { password, ...user } = await this.usersRepository.getUserById(payload.userId);
            return user;
        } catch (error) {
            return null;
        }
    }
}
