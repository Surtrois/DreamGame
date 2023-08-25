const express = require ('express')
const router =  express.Router()
const newController = require('../Controllers/new.controller')
const upload = require('../utils/multer.utils')
const { authenticateUser } = require('../middleware/authenticate.middleware')

router.post("/create",[authenticateUser,  upload.single('thumbnail')], newController.Create)
router.get("/", newController.GetAll)
router.get("/find", newController.GetById)
router.patch("/update",[authenticateUser], newController.Update)
router.delete("/delete",[authenticateUser], newController.Delete)

module.exports = router;