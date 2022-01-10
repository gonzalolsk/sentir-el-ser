'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
try {
  
await queryInterface.createTable("Products_Types", {

  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },

  description:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  product_type:{
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Product_Types",
      key: "id"
    },
    img:{
      type: Sequelize.STRING,
      allowNull: false
    },
    in_sale:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }
})


} catch (error) {
  console.log(error);

}
  },

  down: async (queryInterface, Sequelize) => {
try {
  await queryInterface.dropTable("Products_Types");

} catch (error) {
  console.log(error);
}
  }
};
