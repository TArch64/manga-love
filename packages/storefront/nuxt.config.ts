import { NuxtRouteConfig } from '@nuxt/types/config/router';

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

    build: {
        postcss: {
            plugins: {
                'postcss-nested': true
            }
        }
    },

    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/composition-api/module',
        ['@pinia/nuxt', { disableVuex: true }]
    ],

    modules: [
        '@nuxtjs/apollo',
        '@nuxtjs/i18n'
    ],

    css: [
        'normalize.css/normalize.css',
        '~/styles/global.css'
    ],

    env: proxyEnvs([
        'STOREFRONT_BROWSER_GRAPHQL_URL'
    ]),

    apollo: {
        clientConfigs: {
            default: '~/plugins/apollo-config.ts'
        }
    },

    i18n: {
        locales: [
            {
                code: 'en',
                file: 'locale-en.ts'
            },
            {
                code: 'ua',
                file: 'locale-ua.ts'
            }
        ],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'en',
        strategy: 'no_prefix'
    },

    router: {
        extendRoutes(routes: NuxtRouteConfig[]): void {
            routes.push({ path: '*', redirect: '/' });
        }
    }
};
