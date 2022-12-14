#stage 1

FROM node:19.2-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app

RUN npm run build

#stage 2

FROM nginx:1.23.1-alpine

COPY --from=build-step /app/build /usr/share/nginx/html