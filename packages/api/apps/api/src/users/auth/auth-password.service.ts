import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthPasswordService {
    public encrypt(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    public compare(plain, encrypted): Promise<boolean> {
        return bcrypt.compare(plain, encrypted);
    }
}
