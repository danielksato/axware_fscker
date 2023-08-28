FROM node:20-alpine
WORKDIR /opt
RUN apk upgrade
RUN apk update
RUN apk add git
ADD "https://github.com/danielksato/axware_fscker.git" skipcache
RUN ["git", "clone", "https://github.com/danielksato/axware_fscker.git"]
WORKDIR axware_fscker
RUN ls
RUN npm install
RUN npm run build
CMD node server.js
