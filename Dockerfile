FROM node:18

WORKDIR /docker-node

COPY . .

RUN npm ci

EXPOSE 3000

CMD npm start
