FROM node:20.10-slim

WORKDIR /code

ADD package.json .
ADD yarn.lock .

RUN yarn install

COPY . .

CMD ["yarn", "start"]
