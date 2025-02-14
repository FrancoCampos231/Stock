const { Router} = require('express')
const routerUser = require('./routeUser')

const route = Router()

route.use('/Users', routerUser)

module.exports = route