const {DataTypes, Model} = require('sequelize')
const sequelize = require('../config/db')

// const User = sequelize.define('User', {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     email: {
//         type: DataTypes.STRING,
//         unique: true,
//         allowNull: false
//     },
//     superUser: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false
//     },
//     masterUser: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false
//     },
    
// })

class Users extends Model {}

Users.init (
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
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        superUser: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        masterUser: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        
    },
    {
        sequelize,
        modelName: 'Users',
        tableName: 'Users'
    }

)

module.exports = Users