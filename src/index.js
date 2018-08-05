const express = require('express');

const server = express();
const PORT = 1437;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

server.get('/', (req, res) => res.status(200).send('hello'));

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://mev-gallery.herokuapp.com/');
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');

  next();
});

server.use('/api/v1', require('./api'));
