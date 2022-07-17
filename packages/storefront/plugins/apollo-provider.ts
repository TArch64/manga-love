import { defineNuxtPlugin } from '@nuxtjs/composition-api';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

declare module '@nuxt/types' {
    export interface NuxtAppOptions {
        $apollo: ApolloClient<InMemoryCache>;
    }

    export interface Context {
        $apollo: ApolloClient<InMemoryCache>;
    }
}

export default defineNuxtPlugin((ctx, inject) => {
    inject('apollo', ctx.app.apolloProvider.defaultClient);
});
