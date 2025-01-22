const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
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
    id: {
        type: DataTypes.UUID,
    },
    
})