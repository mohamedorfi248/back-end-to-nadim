const express = require('express');
const getAllUser = require("../controllers/user-controller");
const singup = require("../controllers/user-controller");
const login = require("../controllers/user-controller");
const router =express.Router();

router.get('/',getAllUser);
router.post('/singup',singup)
router.post('/login',login)

module.exports =router;
