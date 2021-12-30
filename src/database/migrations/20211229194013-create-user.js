'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.BOOLEAN
      },
      birth_date: {
        type: Sequelize.DATE
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
      await queryInterface.dropTable('Users');
  
    } catch (error) {
      throw error;
    }
  }
  };

