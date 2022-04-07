import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { useContext } from '@nuxtjs/composition-api';

export function useApollo(): ApolloClient<InMemoryCache> {
    return useContext().app.apolloProvider.defaultClient;
}
