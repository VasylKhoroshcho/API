const { Image } = require('../../db/models');

exports.getImages = async (req, res) => {
  try {
    const result = await Image.findAll({
      where: { deleted: false }
    });

    return res.status(200).send(JSON.stringify(result));
  } catch (err) {
    return err.message;
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const result = await Image.findOne({
      where: { id: req.query.id }
    });

    result.updateAttributes({
      deleted: true
    });

    return res.status(200).send(JSON.stringify(result));
  } catch (err) {
    return err.message;
  }
};

exports.upload = async (req, res) => {
  try {
    console.log(req.files);

    return res.status(200).send(JSON.stringify(result));
  } catch (err) {
    return err.message;
  }
};
