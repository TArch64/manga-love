import { NuxtRouteConfig } from '@nuxt/types/config/router';

function proxyEnvs(envs: string[]): Record<string, string> {
    return envs.reduce((collector, env) => ({ ...collector, [env]: process.env[env] }), {});
}

export default {
    head: {
        title: '',

        titleTemplate(title: string): string {
            return title ? `MangaLove ~ ${title}` : 'MangaLove';
        },

        htmlAttrs: {
            lang: 'en'
        },

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],

        link: [
            { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Nunito+Sans:wght@400;600&display=swap' }
        ]
    },

    build: {
        extractCSS: true,

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
        '@nuxtjs/i18n',
        ['@nuxtjs/toast', { duration: 5000 }]
    ],

    css: [
        'normalize.css/normalize.css',
        '~/styles/global.css'
    ],

    env: proxyEnvs([
        'STOREFRONT_BROWSER_GRAPHQL_URL',
        'STOREFRONT_BROWSER_API_URL'
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
