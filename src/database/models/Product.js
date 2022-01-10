module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          name:{
            type: dataTypes.STRING,
            allowNull: false
          },
        
          description:{
            type: dataTypes.INTEGER,
            allowNull: false,
          },
          price:{
            type: dataTypes.INTEGER,
            allowNull: false
          },
          product_type:{
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "Product_Types",
              key: "id"
            }
        },
            img:{
              type: dataTypes.STRING,
              allowNull: false
            },
            in_sale:{
              type: dataTypes.BOOLEAN,
              allowNull: false,
              defaultValue: false
            },
            created_at: {
              allowNull: false,
              type: dataTypes.DATE
            },
            updated_at: {
              allowNull: false,
              type: dataTypes.DATE
            }     
    }
    
    let config = {
        tableName:'product_type',
        timestamps: true
    }
    
    let Product = sequelize.define(alias, cols, config);
    
    Product.associate = function(models){
        Product.hasMany(models.User,{
            as:"users",
            foreignKey: "product_id"
        })

        Product.belongsTo(models.Product,{
            as:"products_types",
            foreignKey: "product_type"
        })
        Product.hasMany(models.Shopping,{
            as:"shoppings",
            foreignKey: "product_id"
        })
    }

    return Product;

    
    }