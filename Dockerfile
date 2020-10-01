FROM node:10
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

COPY . .
EXPOSE 7000
ENTRYPOINT [ "nodemon", "src/index.js" ]