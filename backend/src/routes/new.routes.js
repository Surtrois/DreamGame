const express = require ('express')
const router =  express.Router()
const categorieController = require('../Controllers/new.controller')
const { authenticateUser } = require('../middleware/authenticate.middleware')

router.post("/create",[authenticateUser], categorieController.Create)
router.get("/", categorieController.GetAll)
router.get("/find", categorieController.GetById)
router.patch("/update",[authenticateUser], categorieController.Update)
router.delete("/delete",[authenticateUser], categorieController.Delete)

module.exports = router;