const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user_controller");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/getUsers", userController.getUser);

module.exports = router;
