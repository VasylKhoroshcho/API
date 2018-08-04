const express = require('express');

const sequelize = require('./db/connection')
const server = express();
const PORT = 3000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get('/', (req, res) => res.status(200).send('hello'));
