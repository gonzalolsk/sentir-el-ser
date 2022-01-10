'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
    await queryInterface.createTable('Seminarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
    });
  } catch (error) {
    throw error;
  }
  },
  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('Seminarios');
  
    } catch (error) {
      throw error;
    }
  }
  };

