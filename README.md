## Up and Run

> install docker and docker-compose or docker desktop

> `docker compose up -d my-mongodb`

> connect the mongo container to any mongo client like (Mongodb Atlas/Studio 3T) and create a db named `lms`. Or create it using cli inside `lms_mongo` container

> `docker compose up -d lms-client`

If we change anything in the docker files or add a new package

> `docker compose up -d lms-client --build`
---

### manual commands
```
# create a network
docker network create lms-network

# run mongodb container
docker run \
  --name my-mongodb -d \
  --network lms-network \
  -p 27017:27017 \
  -v ./.mongo-data/data:/data/db \
  -v ./.mongo-data/config:/data/configdb \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=example \
  mongo


# build server docker image

# build image for production
docker build -t lms-server:0.0.1 ./server/

# build image for development
docker build \
  -t lms-server:0.0.1 \
  --build-arg NODE_VERSION=20 \
  --build-arg ENVIRONMENT=development \
  ./server/

# run server docker container
docker run \
  --name lms-server -d \
  --network lms-network \
  -p 5000:5000 \
  --env-file ./server/.env \
  -e PORT=5000 \
  -e SECRET_KEY=my-secret-key \
  -e TOKEN_DURATION=1h \
  -e MONGO_URI=mongodb://root:example@my-mongodb:27017/ \
  -e MONGO_DB_NAME=lms \
  lms-server:0.0.1

# check server logs
docker logs -ft lms-server

# build client image
docker build \
  -t lms-client:latest \
  ./client/

# run client docker container
docker run \
  --name lms-client -d \
  -p 3000:3000 \
  -e REACT_APP_BASE_URL=http://localhost:5000/api \
  lms-client:latest

# add client container to the network manually
docker network connect lms-network lms-client
docker network inspect lms-network

```