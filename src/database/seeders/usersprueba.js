'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert("Users",[{
      first_name: "Gonzalo",
      last_name: "Lorenzo",
      email: "gonzalolsk@gmail.com",
      password: "123456",
      admin: 1,
      birth_date: "1990/03/27",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]
    )
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Users', null, {});
    
  }
};
