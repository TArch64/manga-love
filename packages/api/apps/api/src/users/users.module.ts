import { Module } from '@nestjs/common';
import { UsersDatabaseModule } from '@manga-love/database';
import { UsersResolver } from './users.resolver';

@Module({
    imports: [UsersDatabaseModule],
    providers: [UsersResolver]
})
export class UsersModule {}
