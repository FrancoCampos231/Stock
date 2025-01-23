const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    superUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    masterUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    
})

module.exports = User