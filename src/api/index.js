const express = require('express');
const bodyParser = require('body-parser');

// const upload = require('../common/upload');

const api = express();

const handlers = require('./handlers');

module.exports = api;

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.get('/images', handlers.getImages);
// api.get('/deleted-images', handlers.deleted);

api.put('/delete', handlers.deleteImage);

// api.post('/upload-image', handlers.upload);
