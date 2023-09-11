const {Router}=require('express')

const router = Router()

const { createUserHandler } = require("../handlers/userHandlers/createUserHandler")
const { getAllUsers } = require("../handlers/userHandlers/getAllUsersHandler")
const { getUserById} = require('../handlers/userHandlers/getUserByIdHandler')
const { getUserByName } = require('../handlers/userHandlers/getUserByNameHandler')
const { authenticateUserHandler } = require('../handlers/userHandlers/authenticateUserHandler')
const { confirmAccountHandler } = require('../handlers/userHandlers/cofirmAccountHandler')



// Creación - Autenticación - Confirmación (users)
router.post("/", createUserHandler)
router.post("/login", authenticateUserHandler)
router.post('/confirm/:token', confirmAccountHandler)



router.get("/", getAllUsers)
router.get("/name?", getUserByName)
router.get("/:id", getUserById )



module.exports = router
