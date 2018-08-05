const multer = require('multer');

const upload = multer({
  storage: require('./storage')
});

module.exports = upload;
