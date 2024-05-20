const express = require('express')
const { loginController } = require('../Controller/loginController')
const loginRoute = express.Router()

loginRoute.use('/login',loginController)

module.exports = {loginRoute}