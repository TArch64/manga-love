import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsersRepository } from '../repository';
import { CurrentUser } from './current-user.decorator';
import { TypedError } from "../../core";
import {DatabaseUser, isUniqueConstrain} from '../../prisma'

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

        return this.encodeToken(user);
    }

    private throwUnauthorizedException(): never {
        throw new TypedError('bad-credentials', 401);
    }

    private encodeToken(user: DatabaseUser): string {
        return this.jwtService.sign({ userId: user.id });
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

    public async signUp(user: Omit<DatabaseUser, 'id'>): Promise<string> {
        if (!user.email || !user.password || !user.username) {
            throw new TypedError('invalid-request');
        }

        try {
            return this.encodeToken(await this.usersRepository.create(user));
        } catch (error: unknown) {
            if (!isUniqueConstrain(error)) {
                throw error;
            }
            const [column] = error.meta.target;
            throw new TypedError(`${column}-already-taken`);
        }
    }
}
