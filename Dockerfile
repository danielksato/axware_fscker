FROM node:20-alpine
WORKDIR /opt
RUN apk upgrade
RUN apk add git
RUN ["git", "clone", "https://github.com/danielksato/axware_fscker.git"] skipcache
WORKDIR axware_fscker
RUN ls
RUN npm install
RUN npm run build
CMD node server.js
