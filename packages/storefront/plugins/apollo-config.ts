import { ApolloClientConfig } from '@nuxtjs/apollo/types/nuxt';
import { Context } from '@nuxt/types';

export default (context: Context): ApolloClientConfig => {
    const env = process.client ? context.env : process.env;
    const { STOREFRONT_SERVER_GRAPHQL_URL, STOREFRONT_BROWSER_GRAPHQL_URL } = env;
    const endpoint = context.ssrContext ? STOREFRONT_SERVER_GRAPHQL_URL : STOREFRONT_BROWSER_GRAPHQL_URL;

    return {
        httpEndpoint: endpoint || ''
    };
};
