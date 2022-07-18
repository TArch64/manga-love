import { defineNuxtPlugin } from '@nuxtjs/composition-api';
import { ApolloClient, OperationVariables, QueryOptions, MutationOptions, ApolloQueryResult, ApolloError } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

type OperationResult<Result> = ApolloQueryResult<Result> | FetchResult<Result>;

class ApolloProvider {
    constructor(private client: ApolloClient<InMemoryCache>) {}

    public query<Result, Variables = OperationVariables>(
        query: QueryOptions<Variables>['query'],
        config: Omit<QueryOptions<Variables>, 'query'>
    ): Promise<Result> {
        const options: QueryOptions<Variables> = { ...config, query };

        return this.client.query<Result, Variables>(options)
            .then(this.handleOperationResult, this.handlerOperationError);
    }

    public mutate<Result, Variables = OperationVariables>(
        mutation: MutationOptions<Variables>['mutation'],
        config: Omit<MutationOptions<Variables>, 'mutation'>
    ): Promise<Result> {
        const options = { ...config, mutation } as MutationOptions<Result, Variables>;

        return this.client.mutate<Result, Variables>(options)
            .then(this.handleOperationResult, this.handlerOperationError);
    }

    private handleOperationResult<Result>(result: OperationResult<Result>): Result {
        if (result.errors) {
            throw result.errors[0].extensions.exception.thrownValue;
        }
        return result.data!;
    }

    private handlerOperationError(error: ApolloError): never {
        throw error.graphQLErrors[0].extensions.exception.thrownValue;
    }
}

declare module '@nuxt/types' {
    export interface NuxtAppOptions {
        $apollo: ApolloProvider;
    }

    export interface Context {
        $apollo: ApolloProvider;
    }
}

export default defineNuxtPlugin((ctx, inject) => {
    inject('apollo', new ApolloProvider(ctx.app.apolloProvider.defaultClient));
});
