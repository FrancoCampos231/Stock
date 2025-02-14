const { DataTypes, Model} = require('sequelize')
const sequelize = require('../config/db')

// const Product = sequelize.define('Product', {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     cant: {
//         type: DataTypes.INTEGER
//     },

// })

class Product extends Model {}

Product.init (
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cant: {
            type: DataTypes.INTEGER
        },
    
    },
    {
        sequelize,
        modelName: 'Product',
        tableName: 'Products'
    }
)

module.exports = Product