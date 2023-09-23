FROM node:16.17.1

WORKDIR /code

ADD package.json .
ADD yarn.lock .

RUN yarn install

COPY . .

CMD ["yarn", "dev"]
