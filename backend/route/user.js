const express = require('express');
const { Signup } = require("../controller/User");
const { login } = require("../controller/User");

const router = express.Router();
router.post('/signup',Signup);
router.post('/login',login);

module.exports = router;

