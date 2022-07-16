import { Module } from '@nestjs/common';
import { UsersDatabaseModule } from '@manga-love/database';
import { UsersResolver } from './users.resolver';
import { AuthModule } from './auth';

@Module({
    imports: [
        AuthModule,
        UsersDatabaseModule
    ],
    providers: [UsersResolver]
})
export class UsersModule {}
