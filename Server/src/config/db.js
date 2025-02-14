// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'postgres',
// });

// const testConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexión a la base de datos establecida correctamente.');
//   } catch (error) {
//     console.error('No se pudo conectar a la base de datos:', error);
//   }
// };

// testConnection();

// module.exports = sequelize;

// config/db.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, // Desactiva los logs de Sequelize en consola
  }
);

module.exports = sequelize;