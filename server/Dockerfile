ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-slim

ARG ENVIRONMENT=production
ENV NODE_ENV=${ENVIRONMENT}

WORKDIR /code

ADD package.json .
ADD yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then yarn dev; else yarn start; fi" ]
