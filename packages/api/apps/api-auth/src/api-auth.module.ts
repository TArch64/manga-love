import { Module } from '@nestjs/common';
import { AuthController } from './controllers';

@Module({
    imports: [],
    controllers: [AuthController],
    providers: []
})
export class ApiAuthModule {}
