FROM node:20-slim

WORKDIR /code

ADD package.json .
ADD yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
