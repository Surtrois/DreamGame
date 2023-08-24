const express = require ('express')
const router =  express.Router()
const userController = require('../Controllers/user.controller')
const { authenticateUser } = require('./../middleware/authenticate.middleware.js')


router.post("/signin", userController.SignIn)
router.post('/profile', authenticateUser, userController.GetProfile);


module.exports = router;