#!/bin/bash

docker build . -t 917812706670.dkr.ecr.us-east-1.amazonaws.com/axware-fscker
docker push 917812706670.dkr.ecr.us-east-1.amazonaws.com/axware-fscker
ssh -i /home/pretzelface/axware-fscker.pem ec2-user@ec2-3-236-178-34.compute-1.amazonaws.com \
  docker ps | tail -n 1 | awk '{print $1}' | xargs docker kill \
  docker pull 917812706670.dkr.ecr.us-east-1.amazonaws.com/axware-fscker \
  docker run -d -p 8080:8080 917812706670.dkr.ecr.us-east-1.amazonaws.com/axware-fscker \
