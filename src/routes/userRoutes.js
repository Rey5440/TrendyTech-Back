const {Router}=require('express')

const router = Router()

const {checkAuth} = require('../middleware/checkAuth')

const { createUserHandler } = require("../handlers/userHandlers/createUserHandler")
const { getAllUsers } = require("../handlers/userHandlers/getAllUsersHandler")
const { getUserById} = require('../handlers/userHandlers/getUserByIdHandler')
const { getUserByName } = require('../handlers/userHandlers/getUserByNameHandler')
const { authenticateUserHandler } = require('../handlers/userHandlers/authenticateUserHandler')
const { confirmAccountHandler } = require('../handlers/userHandlers/cofirmAccountHandler')
const {profile} = require('../controllers/userController/authenticateUser')
const { createAuth0UserHandler } = require('../handlers/userHandlers/createAuth0UserHandler')


// Creación - Autenticación - Confirmación (users)
router.post("/", createUserHandler)
router.post("/auth", createAuth0UserHandler)
router.post("/login", authenticateUserHandler)
router.post('/confirm/:token', confirmAccountHandler)

router.get('/profile', checkAuth, profile)

router.get("/", getAllUsers)
router.get("/name?", getUserByName)
router.get("/:id", getUserById )




module.exports = router
