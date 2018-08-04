FROM node:latest

WORKDIR /usr/src/galery

COPY package*.json /usr/src/galery/

RUN npm install

COPY . /usr/src/galery

CMD [ "npm", "run", "prod" ]
