FROM node:16.14-stretch

WORKDIR /project

RUN npm install -g pnpm
RUN pnpm config set store-dir /pnpm-storage

ENV PACKAGE_DIR ./packages/api

COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml ./
COPY $PACKAGE_DIR/package.json $PACKAGE_DIR/

RUN pnpm install
