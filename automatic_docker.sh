#!/bin/bash
echo "clean docker!" 

docker-compose down
docker ps -a
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)

docker rmi crud-login-mysql-nodejs_app
