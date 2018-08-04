module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    category: {
      type: DataTypes.STRING,
      defaultValue: 'other'
    },
    url: DataTypes.STRING,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});


  return Image;
};
