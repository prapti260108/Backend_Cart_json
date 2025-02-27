const express = require('express');
const { signup,login } = require('../controller/userController');
const {authenticate} = require("../Middleware/AuthMiddleware");
const router = express.Router();


// User signup
router.post('/signup', signup);
// User login
router.post('/login',authenticate, login);


module.exports = router;
