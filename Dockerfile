FROM node:latest

WORKDIR /usr/src/galery

COPY package*.json /usr/src/galery/

RUN npm install

COPY . /usr/src/galery

EXPOSE 1437

CMD [ "npm", "run", "prod" ]
