const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Provider = sequelize.define('Provider', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direction: {
        type: DataTypes.STRING
    }

})

module.exports = Provider