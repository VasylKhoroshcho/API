const express = require('express');
const bodyParser = require('body-parser');

const upload = require('../utils/upload');

const api = express();

const handlers = require('./handlers');

module.exports = api;

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.get('/images', handlers.getImages);
api.delete('/delete', handlers.deleteImage);
api.post('/upload', upload.any(), handlers.upload);
