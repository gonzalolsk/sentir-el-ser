module.exports = function (sequelize, dataTypes)  {
  let alias = 'User'; 
  let cols = {

      first_name: {
          type: dataTypes.STRING
      },
      last_name: {
          type: dataTypes.STRING
      },
      email:{
          type: dataTypes.STRING
      },
      password: {
          type: dataTypes.STRING
      },
      admin: {
          type: dataTypes.BOOLEAN,
          defaultValue: 0
      },
      birth_date: {
          type: dataTypes.DATE
      },
      created_at: {
        type: dataTypes.DATE,
        defaultValue: dataTypes.NOW
    },
      updated_at: {
          type: dataTypes.DATE,
          defaultValue: dataTypes.NOW
    },
  }
  
  let config = {
      tableName:'users',
      timestamps: true,
      underscored:true
  }
  
  let User = sequelize.define(alias, cols, config);
  
  return User;
  
  }

