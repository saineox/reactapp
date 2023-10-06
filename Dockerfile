# Stage 1 - Building image
FROM node:16.13.2-alpine

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

# Stage 2 - Running image
FROM nginx:alpine-slim

#COPY --from=node /app/build/. /usr/share/nginx/html
