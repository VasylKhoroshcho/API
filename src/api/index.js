const express = require('express');
// const bodyParser = require('body-parser');

// const upload = require('../common/upload');

const api = express();

// const apiErrorHandler = require('../common/middlewares/api-error-handler');
const handlers = require('./handlers');

module.exports = api;

api.get('/images', handlers.getImages);
// api.get('/deleted-images', handlers.deleted);

// api.put('/delete', handlers.delete);

// api.post('/upload-image', handlers.upload);
