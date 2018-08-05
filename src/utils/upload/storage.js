const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `${__dirname}/tmp`);
  },
  filename(req, file, cb) {
    cb(null, `${Date.now().toString()}-${file.originalname}.${file.mimetype.split('/')[1]}`);
  }
});

module.exports = storage;
