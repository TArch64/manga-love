import {Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt'
import {UsersRepository} from "../users.repository";
import {CurrentUser} from "./current-user.decorator";

export type TokenPayload = { userId: string };

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly jwtService: JwtService
    ) {}

    async signIn(email: string, password: string): Promise<string>  {
        if (!email || !password) this.throwUnauthorizedException();

        const user = await this.usersRepository.getUserByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            this.throwUnauthorizedException();
        }

        return this.jwtService.sign({userId: user.id});
    }

    private async comparePasswords(input: string, password: string): Promise<boolean> {
        return bcrypt.compare(input, password);
    }

    private throwUnauthorizedException() {
        const error = new UnauthorizedException();

        error.message = 'Bad Credentials';
        throw error;
    }

    async decodeToken(token: string): Promise<CurrentUser | null> {
        if (!token) return null;

        try {
            const payload = this.jwtService.decode(token) as TokenPayload;
            const { password, ...user } = await this.usersRepository.getUserById(payload.userId)
            return user;
        } catch (error) {
            return null;
        }
    }
}
