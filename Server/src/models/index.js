// Importamos la conexión configurada
const sequelize = require('../config/db'); 
const Users = require('./Users');
const Product = require('./Products');
const Provider = require('./Provider');

// Inicializar los modelos con la conexión existente
// const Users = UsersModel(sequelize, Sequelize);
// const Product = ProductModel(sequelize, Sequelize);
// const Provider = ProviderModel(sequelize, Sequelize);

// Definir las relaciones entre los modelos
Users.hasMany(Product, {
  foreignKey: 'userId',
  as: 'products',
});
Product.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

Provider.hasMany(Product, {
  foreignKey: 'providerId',
  as: 'products',
});
Product.belongsTo(Provider, {
  foreignKey: 'providerId',
  as: 'provider',
});

// Sincronizar los modelos con la base de datos
const initModels = async () => {
  try {
    await sequelize.sync({ force: false }); // Cambia a true solo si necesitas reiniciar las tablas
    console.log('Modelos sincronizados correctamente.');
  } catch (error) {
    console.error('Error al sincronizar los modelos:', error);
  }
};

initModels();

module.exports = {
  Users,
  Product,
  Provider,
};
