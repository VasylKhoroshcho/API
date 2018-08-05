const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log('database connect success');
  })
  .catch((err) => console.log(err));

module.exports = sequelize;
