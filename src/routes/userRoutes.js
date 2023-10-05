const { Router } = require("express");

const router = Router();

const { checkAuth } = require("../middleware/checkAuth");

const {
  createUserHandler,
} = require("../handlers/userHandlers/createUserHandler");
const { getAllUsers } = require("../handlers/userHandlers/getAllUsersHandler");
const { getUserById } = require("../handlers/userHandlers/getUserByIdHandler");
const {
  getUserByName,
} = require("../handlers/userHandlers/getUserByNameHandler");
const {
  authenticateUserHandler,
} = require("../handlers/userHandlers/authenticateUserHandler");
const {
  confirmAccountHandler,
} = require("../handlers/userHandlers/cofirmAccountHandler");
const { profile } = require("../controllers/userController/authenticateUser");
const {
  createAuth0UserHandler,
} = require("../handlers/userHandlers/createAuth0UserHandler");

const { testToken } = require("../controllers/userController/testToken");

const {
  resetPassword,
} = require("../controllers/userController/resetPassword");

const { newPassword } = require("../controllers/userController/newPassword");
const getUserByEmailHandler = require("../handlers/userHandlers/getUserByEmailHandler");
const editNameUserHandler = require("../handlers/userHandlers/editNameUserHandler");
const editImageUserHandler = require("../handlers/userHandlers/editImageUserHandler");
const deleteUserHandler = require("../handlers/userHandlers/deleteUserHandler");
const {
  getUserByToken,
} = require("../handlers/userHandlers/getUserByTokenHandler");

const addReviewHandler = require("../handlers/userHandlers/addReviewHandler");
const showReviewHandler = require("../handlers/userHandlers/showReviewHandler");
const getReviewHandler = require("../handlers/userHandlers/getReviewHandler");


// const {} = require('')

// Creación - Autenticación - Confirmación (users)

router.get("/profile", checkAuth, profile);

router.get("/:id", getUserById);
router.get("/email/:email", getUserByEmailHandler);

router.post("/", createUserHandler);
router.post("/auth", createAuth0UserHandler);
router.post("/login", authenticateUserHandler);
router.post("/addreview", addReviewHandler);
router.post("/showreview", showReviewHandler);
router.get("/getreviews", getReviewHandler);



router.get("/token/:token", getUserByToken);
router.post("/confirm/:token", confirmAccountHandler);
router.put("/editimage", editImageUserHandler);
router.put("/editname", editNameUserHandler);
router.put("/delete", deleteUserHandler);
router.post("/reset-password", resetPassword);
router.route("/reset-password/:token").get(testToken).post(newPassword);

router.get("/", getAllUsers);
router.get("/name?", getUserByName);

module.exports = router;
// const {Router}=require('express')

// const router = Router()

// const {checkAuth} = require('../middleware/checkAuth')

// const { createUserHandler } = require("../handlers/userHandlers/createUserHandler")
// const { getAllUsers } = require("../handlers/userHandlers/getAllUsersHandler")
// const { getUserById} = require('../handlers/userHandlers/getUserByIdHandler')
// const { getUserByName } = require('../handlers/userHandlers/getUserByNameHandler')
// const { authenticateUserHandler } = require('../handlers/userHandlers/authenticateUserHandler')
// const { confirmAccountHandler } = require('../handlers/userHandlers/cofirmAccountHandler')
// const {profile} = require('../controllers/userController/authenticateUser')
// const { createAuth0UserHandler } = require('../handlers/userHandlers/createAuth0UserHandler')

// const {testToken} = require('../controllers/userController/testToken')

// const {resetPassword} = require('../controllers/userController/resetPassword')

// const {newPassword} = require('../controllers/userController/newPassword')
// const getUserByEmailHandler = require('../handlers/userHandlers/getUserByEmailHandler')
// const editNameUserHandler = require('../handlers/userHandlers/editNameUserHandler')
// const editImageUserHandler = require('../handlers/userHandlers/editImageUserHandler')
// const deleteUserHandler = require('../handlers/userHandlers/deleteUserHandler')
// const { getUserByToken } = require('../handlers/userHandlers/getUserByTokenHandler')
// const addReviewHandler = require('../handlers/userHandlers/addReviewHandler')
// const showReviewHandler = require('../handlers/userHandlers/showReviewHandler')
// const getReviewHandler = require('../handlers/userHandlers/getReviewHandler')

// // const {} = require('')



// // Creación - Autenticación - Confirmación (users)
// router.post("/", createUserHandler)
// router.post("/auth", createAuth0UserHandler)
// router.post("/login", authenticateUserHandler)
// router.post('/confirm/:token', confirmAccountHandler)
// router.post('/emailuser', getUserByEmailHandler)
// router.post('/addreview', addReviewHandler)
// router.post('/showreview', showReviewHandler)
// router.get('/getreviews', getReviewHandler)
// router.put('/editimage', editImageUserHandler)
// router.put('/editname', editNameUserHandler)
// router.put('/delete', deleteUserHandler)
// router.post('/reset-password', resetPassword)
// router.route('/reset-password/:token').get(testToken).post(newPassword)

// router.get('/profile', checkAuth, profile)

// router.get("/", getAllUsers)
// router.get("/name?", getUserByName)
// router.get("/token/:token", getUserByToken);
// router.get("/:id", getUserById)





// module.exports = router
