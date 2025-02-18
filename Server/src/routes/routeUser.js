const {Router} = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser } = require('../controllers/userController');

const routerU = Router();

routerU.get('/', getAllUsers)
routerU.get('/:id', getUserById)
routerU.post('/', createUser)
routerU.put('/:id',updateUser)
routerU.delete('/:id',deleteUser)
routerU.post('/login', loginUser)

module.exports = routerU;