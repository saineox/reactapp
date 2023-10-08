# Stage 1 - Building image
FROM node:16.13.2-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
