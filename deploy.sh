#!/bin/bash

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 917812706670.dkr.ecr.us-east-1.amazonaws.com
docker build . -t 917812706670.dkr.ecr.us-east-1.amazonaws.com/axware-fscker
docker push 917812706670.dkr.ecr.us-east-1.amazonaws.com/axware-fscker
scp -i /home/pretzelface/axware-fscker.pem remoteDeploy.sh ec2-user@ec2-3-236-178-34.compute-1.amazonaws.com:~
ssh -i /home/pretzelface/axware-fscker.pem ec2-user@ec2-3-236-178-34.compute-1.amazonaws.com "
sudo chmod +x ./remoteDeploy.sh
./remoteDeploy.sh
"
