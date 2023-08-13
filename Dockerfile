FROM node:20-alpine
WORKDIR /opt
RUN apk upgrade
RUN apk add git
RUN git clone https://github.com/danielksato/axware_fscker.git
WORKDIR axware_fscker
RUN npm install
RUN npm build
CMD node server.js
