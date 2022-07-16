import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users';
import { MangasModule } from './mangas';
import { MicroservicesModule } from './microservices.config';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: {
                settings: {
                    'editor.theme': 'light',
                    'schema.polling.enable': false,
                    'request.credentials': 'include'
                }
            },
            autoSchemaFile: join(process.cwd(), './schema.graphql')
        }),
        UsersModule,
        MangasModule,
        MicroservicesModule
    ]
})
export class AppModule {}