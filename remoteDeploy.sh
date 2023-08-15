#!/bin/sh
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 917812706670.dkr.ecr.us-east-1.amazonaws.com
docker pull 917812706670.dkr.ecr.us-east-1.amazonaws.com/axware-fscker
docker kill `docker ps | tail -n 1 | awk '{print $1}'`
docker run -d -p 8080:8080 --restart always 917812706670.dkr.ecr.us-east-1.amazonaws.com/axware-fscker
