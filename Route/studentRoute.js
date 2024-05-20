const express = require('express')
const { authMiddleware, studentAuth, allAccess, adminAuth } = require('../middleware/authMiddleware')
const { studentController, studentFind, studentUpdate, studentDelete } = require('../Controller/studentController')
const studentRoute = express.Router()

studentRoute.post('/create',authMiddleware,studentAuth,studentController)
studentRoute.post('/Read/:id',authMiddleware,allAccess,studentFind)
studentRoute.post('/update/:id',authMiddleware,studentAuth,studentUpdate)
studentRoute.post('/delete/:id',authMiddleware,adminAuth,studentDelete)

module.exports = {studentRoute}
