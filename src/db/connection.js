const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://user@postgres:5432/gallery');

sequelize
  .authenticate()
  .then(() => {
    console.log('database connect success');
  })
  .catch((err) => console.log(err));

module.exports = sequelize;
