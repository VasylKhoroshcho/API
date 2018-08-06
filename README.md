# API

This README would normally document whatever steps are necessary to get the
application up and running.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Docker](https://docs.docker.com/install/)

## Deployment strategy

* [Travis](https://travis-ci.org/VasylKhoroshcho/API)

## Installation

* `git clone git@ssh.hub.teamvoy.com:bbank/api.git`
* `npm install`
* `docker-compose up`

## Add env variables

* `export DB_URL=postgres://user@localhost:5435/gallery`

## Running test

* `npm run test`

## Running / Development

* `docker-compose up`

## DB migration

* `npm run migrate`

## Further Reading / Useful Links

* [Ava](https://github.com/avajs/ava)
* [Express](http://expressjs.com/)
* [Sequelize](http://docs.sequelizejs.com/)
* [Google kubernates](https://cloud.google.com/kubernetes-engine/)

