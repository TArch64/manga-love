# MangaLove

## Setup

1. Install docker, docker-compose, node (linters only)
2. Install linter dependencies `npm install`
3. Create `.env` file. Check `.env.example`
4. Build project `docker compose build`
5. Up project `docker compose up`

## Change API Schema

1. Change `api/prisma/schema.prisma`
2. Generate updated prisma client
```shell
docker compose run --rm api npm run prisma:generate
```
3. Generate migration
```shell
docker compose run --rm api npm run prisma:migrate "migration name here"
```
4. Add seeds and execute them
```shell
docker compose run --rm api npm run prisma:seeds
```
