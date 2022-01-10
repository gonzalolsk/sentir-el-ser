'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
try {
  
    await queryInterface.createTable("shopping", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Products",
          key: "id"
        },
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        },
      },

      current_price:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      release_date:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue:Sequelize.fn("NOW")
      },

    });
  } 
  catch (error) {
  console.log(error);
  }
},

  down: async (queryInterface, Sequelize) => {
try {
  await queryInterface.dropTable("shopping")
} catch (error) {
  console.log(error);
}
  }
};
