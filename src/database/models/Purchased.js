module.exports = (sequelize, dataTypes) => {
    let alias = 'Purchased'; 
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
          user_id:{
            type: dataTypes.INTEGER,
        },
    //     masterclass_id:{
    //       type: dataTypes.INTEGER,
    //   },
      seminario_id:{
        type: dataTypes.INTEGER,
    },
//     formaciones_id:{
//       type: dataTypes.INTEGER,
//   },
    createdAt:{
      type: dataTypes.DATE,
      allowNull: false,
      defaultValue: dataTypes.NOW
  },
    updatedAt:{
      type: dataTypes.DATE,
      allowNull: false,
      defaultValue: dataTypes.NOW
    }       
    }
    
    let config = {
        tableName:'purchased',
        timestamps: true
    }
    
    let Purchased = sequelize.define(alias, cols, config);
    Purchased.associate = function(models){
        Purchased.belongsTo(models.User,{
            as:"users",
            foreignKey: "user_id"
        })
        // Purchased.belongsTo(models.Masterclass,{
        //     as:"masterclasses",
        //     foreignKey: "masterclass_id"
        // })
        Purchased.belongsTo(models.Seminario,{
            as:"seminarios",
            foreignKey: "seminario_id"
        })
        // Purchased.hasMany(models.Formacion,{
        //     as:"formaciones",
        //     foreignKey: "formacion_id"
        // })
    }

    return Purchased;

    
    }