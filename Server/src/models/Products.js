const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Product = sequelize.define('Product', {
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

})

module.exports = Product