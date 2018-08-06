const { Image } = require('../../db/models');

exports.getImages = async (req, res) => {
  try {
    const result = await Image.findAll({
      order: [['updatedAt', 'DESC']],
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
    await Image.create({
      name: req.body.name,
      category: 'other',
      url: `${process.env.IMAGE_URL}${req.files[0].filename}`
    });

    return res.status(200).send(JSON.stringify('success'));
  } catch (err) {
    return err.message;
  }
};
