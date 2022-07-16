import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseUser } from '@manga-love/database';

export type TokenPayload = { userId: string };

@Injectable()
export class AuthTokenService {
    constructor(private readonly jwtService: JwtService) {}

    public encodeToken(user: DatabaseUser): string {
        return this.jwtService.sign({ userId: user.id });
    }
}
