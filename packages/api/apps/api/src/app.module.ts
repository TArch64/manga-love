import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MicroservicesModule } from './microservices.config';
import { UsersModule } from './users';
import { MangasModule } from './mangas';

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
            autoSchemaFile: join(process.cwd(), './schema.graphql'),
            context: ({ req, res }) => ({ req, res })
        }),
        UsersModule,
        MangasModule,
        MicroservicesModule
    ]
})
export class AppModule {}
