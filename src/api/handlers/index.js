

exports.upload = async (req, res) => {
  try {


    return res.status(HttpStatusCodes.OK).send(payload);
  } catch (err) {
    return err.message;
  }
};
