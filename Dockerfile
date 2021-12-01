FROM node:16-alpine as development

WORKDIR /app

COPY package.json ./
COPY npm-shrinkwrap.json ./
COPY .npmrc ./
COPY src/ ./

FROM nginx:1.21-alpine as production

COPY --from=development /app/index.html /usr/share/nginx/html
