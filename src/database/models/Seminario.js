module.exports = function (sequelize, dataTypes)  {
    let alias = 'Seminario'; 
    let cols = {
  
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
      },
      name: {
        type: dataTypes.STRING
      },
      description: {
        type: dataTypes.STRING
      },
      img: {
        type: dataTypes.STRING
      },
      link: {
          type: dataTypes.STRING
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
        tableName:'seminarios',
        timestamps: true,
        underscored:true
    }
    
    let Seminario = sequelize.define(alias, cols, config);
    
    return Seminario;
    
    }
  
  