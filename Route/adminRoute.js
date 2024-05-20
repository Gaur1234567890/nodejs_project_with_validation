const express = require('express')
const { adminController } = require('../Controller/adminController')
const { body } = require('express-validator')
const adminRoute = express.Router()
adminRoute.use('/registration',body('email').isEmail(),body('password').isLength({min:8}),adminController)
adminRoute.post('/registration',adminController)

module.exports = {adminRoute}