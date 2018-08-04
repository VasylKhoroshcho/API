module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Images', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: Sequelize.STRING,
      category: {
        type: Sequelize.STRING,
        defaultValue: 'other'
      },
      url: Sequelize.STRING
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Images');
  }
};
