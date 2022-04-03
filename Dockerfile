FROM node:16.14-stretch

WORKDIR /app

ADD ./package.json ./package-lock.json ./

RUN npm install
