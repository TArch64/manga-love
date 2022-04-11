import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { v4 as generateUUID } from 'uuid';
import { PasswordResetsRepository, UsersRepository } from '../repository';
import { TypedError } from '../../core';
import { DatabaseUser, isUniqueConstrain } from '../../prisma';

export type TokenPayload = { userId: string };

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly passwordResetsRepository: PasswordResetsRepository,
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

    public async askResetPassword(email: string): Promise<void> {
        const user = await this.usersRepository.getUserByEmail(email);

        if (!user) {
            throw new TypedError('invalid-email');
        }

        await this.passwordResetsRepository.create(user, generateUUID());
    }
}
