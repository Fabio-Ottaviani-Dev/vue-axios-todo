# Vue, Axios, Todos
A besic REST CRUD Todos App, made with: Vue & Axios

## Dependencies

1. [Vue](https://vuejs.org/)
2. [Axios](https://github.com/axios/axios)
3. [lite-server](https://www.npmjs.com/package/lite-server)
4. [JSON Server](https://github.com/typicode/json-server)

## Setup

``` bash

# 1. Clone the project
# 2 cd into it
# 3 install the dependencies
npm install
# OR
npm install lite-server --save-dev
npm install json-server

```

## Run it

``` bash
# 1. Run lite-server
npx lite-server
# 2. Open another tab in the terminal (ctrl + shift + t)

# 3. Run json-server
json-server --port 5000 --watch db.json

```

## How to test json-server endpoint with curl

``` bash
# Create
curl -X POST -H "Content-Type: application/json" -d '{"name":"New todo stuff"}' http://localhost:5000/todos

# Read >> All
curl -X GET http://localhost:5000/todos

# Read >> id 1
curl -X GET http://localhost:5000/todos/1

# Update >> id 1
curl -X PATCH -H "Content-Type: application/json" -d '{"name":"Very New todo stuff"}' http://localhost:5000/todos/1

# Delete >> id 1
curl -X DELETE http://localhost:5000/todos/1
```
