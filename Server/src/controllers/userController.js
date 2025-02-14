const { Users } = require('../models');
const bcrypt = require('bcrypt')

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Crear un usuario
const createUser = async (req, res) => {

  const { name, email, password, superUser, masterUser } = req.body

  try {
    if (!superUser&& !masterUser) {
      superUser = false
      masterUser = false
    }

    const exisUser = await Users.findOne({ where: { email } });
    if (exisUser) {
      return res.status(400).json({ message: 'El usuario ya existe' })
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const newUser = await Users.create({
      name,
      email,
      password: hashedPassword,
      superUser,
      masterUser
    });
    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      superUser: newUser.superUser,
      masterUser: newUser.masterUser
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    await user.update(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    await user.destroy();
    res.json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
