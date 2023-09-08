const {Router}=require('express')

const router = Router()

const { createUserHandler } = require("../handlers/userHandlers/createUserHandler")
const { getAllUsers } = require("../handlers/userHandlers/getAllUsersHandler")
const { getUserById} = require('../handlers/userHandlers/getUserByIdHandler')
const { getUserByName } = require('../handlers/userHandlers/getUserByNameHandler')




router.post("/", createUserHandler)
router.get("/", getAllUsers)
router.get("/name", getUserByName)
router.get("/:id", getUserById )



module.exports = router
