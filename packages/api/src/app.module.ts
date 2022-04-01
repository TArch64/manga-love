import { Module } from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {UsersModule} from "./users";

@Module({
  imports: [
      UsersModule,
      GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          playground: {
              settings: { 'editor.theme': 'light' }
          },
          autoSchemaFile: true
      })
  ]
})
export class AppModule {}
