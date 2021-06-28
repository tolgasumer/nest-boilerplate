## Description

Boilerplate for a NestJS REST API (Express) performing CRUD operations with TypeORM. Swagger enabled.

## Configuration

DB configuration: ```/ormconfig.json```

```
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "test",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
}
```

## Installation

```bash
$ npm install
```
```bash
$ docker run --name nest-mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:latest
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
