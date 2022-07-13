import { join } from 'path';
import { FactoryProvider, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { UsersModule } from './users';
import { MangasModule } from './mangas';

const microservices = {
    AUTH_SERVICE: { host: process.env.API_AUTH_HOST },
    MAILER_SERVICE: { host: process.env.API_MAILER_HOST }
};

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
        MangasModule
    ],

    providers: Object.entries(microservices).map(([token, options]): FactoryProvider => ({
        provide: token,
        useFactory: () => ClientProxyFactory.create({
            transport: Transport.TCP,
            options: { port: 3000, host: options.host }
        })
    }))
})
export class AppModule {}
