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
      birth_date: {
        type: dataTypes.DATE
    },
      admin: {
          type: dataTypes.BOOLEAN,
          defaultValue: 0
      },
      products:{
        type: dataTypes.STRING,
        allowNull: true,
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
  
  User.associate = (models) => {
    Product.hasMany(models.Shopping,{
      as: "shoppings",
      foreignKey: "id"
    })
  }
  return User;
  
  }

