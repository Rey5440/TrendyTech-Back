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

const {testToken} = require('../controllers/userController/testToken')

const {resetPassword} = require('../controllers/userController/resetPassword')

const {newPassword} = require('../controllers/userController/newPassword')

// const {} = require('')



// Creación - Autenticación - Confirmación (users)
router.post("/", createUserHandler)
router.post("/login", authenticateUserHandler)
router.post('/confirm/:token', confirmAccountHandler)

router.post('/reset-password', resetPassword)
router.route('/reset-password/:token').get(testToken).post(newPassword)

router.get('/profile', checkAuth, profile)

router.get("/", getAllUsers)
router.get("/name?", getUserByName)
router.get("/:id", getUserById )




module.exports = router
