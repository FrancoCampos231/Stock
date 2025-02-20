const { Users } = require('../models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'name', 'email', 'superUser', 'masterUser']
    });
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

  const { name, email, password } = req.body



  const superUser = false
  const masterUser = false


  try {


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
    console.log(newUser)
    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
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

//Logear como Usuario
const loginUser = async (req, res) => {
  
  const { email, password} = req.body
  
  try {
    const user = await Users.findOne({ where: {email}});
    if(!user) {
      return res.status(402).json({ message: 'El usuario no existe'})
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if(!isPassword) {
      return res.status(403).json({message: 'Contraseña Invalida'})
    }

    const token = jwt.sign({ id: user.id, email: user.email }, "secretKey", { expiresIn: "1h" });

    res.json({
      id : user.id,
      name: user.name,
      email: user.email,
      message: 'Inicio de sesion exitosa!',
      token
    })

  } catch (error) {
    console.log('Error', error)
    res.status(501).json({message: 'Error al iniciar sesion'})
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser
};
