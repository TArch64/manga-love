function proxyEnvs(envs: string[]): Record<string, string> {
    return envs.reduce((collector, env) => ({ ...collector, [env]: process.env[env] }), {});
}

export default {
    head: {
        title: 'MangaLove',
        titleTemplate: 'MangeLove ~ %s',

        htmlAttrs: {
            lang: 'en'
        },

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/composition-api/module'
    ],

    modules: [
        '@nuxtjs/apollo'
    ],

    env: proxyEnvs([
        'STOREFRONT_BROWSER_GRAPHQL_URL'
    ]),

    apollo: {
        clientConfigs: {
            default: '~/plugins/apollo-config.ts'
        }
    }
};
