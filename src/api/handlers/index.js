const { Image } = require('../../db/models');

exports.getImages = async (req, res) => {
  try {
    const result = await Image.findAll();

    return res.status(200).send(JSON.stringify(result));
  } catch (err) {
    return err.message;
  }
};
