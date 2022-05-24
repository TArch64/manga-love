# MangaLove

## Setup

1. Install docker, docker-compose, node (linters only)
2. Install linter dependencies `npm install`
3. Create `.env` file. Check `.env.example`
4. Build project `docker compose build`
5. Prepare database
```shell
docker compose run --rm api npm run prisma:migrate;
docker compose run --rm api npm run prisma:seeds;
docker compose run --rm api npm run prisma:generate;
```
6. Up project `docker compose up`

## Change API Schema

1. Change `api/prisma/schema.prisma`
2. Generate updated prisma client
```shell
docker compose run --rm api npm run prisma:generate
```
3. Generate migration
```shell
docker compose run --rm api npm run prisma:new-migration "migration name here"
```
4. Add seeds and execute them
```shell
docker compose run --rm api npm run prisma:seeds
```

## Storefront Links
1. [Nuxt](https://nuxtjs.org/docs/get-started/installation)
2. [Vue Apollo](https://apollo.vuejs.org/guide/)
3. [Nuxt Composition API](https://composition-api.nuxtjs.org/getting-started/introduction)
4. [Nuxt i18n](https://i18n.nuxtjs.org/)
5. [Pinia](https://pinia.vuejs.org/introduction.html)
