'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('Purchased', {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
        user_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{  //esto es para decirle que hay una foreing key relacionada al modelo de users
            model: 'Users',
            key:'id'
          }
      // },
      // masterclass_id:{
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references:{  //esto es para decirle que hay una foreing key relacionada al modelo de users
      //     model: 'masterclasses',
      //     key:'id'
      //   }
    },
    seminario_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{  //esto es para decirle que hay una foreing key relacionada al modelo de users
        model: 'seminarios',
        key:'id'
      }
  // },
  // formaciones_id:{
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references:{  //esto es para decirle que hay una foreing key relacionada al modelo de users
  //     model: 'formaciones',
  //     key:'id'
  //   }
},
  createdAt:{
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
},
  updatedAt:{
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }       
})
    } catch (error) {
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('Purchased');

    } catch (error) {
      throw error;
    }
  }
};
