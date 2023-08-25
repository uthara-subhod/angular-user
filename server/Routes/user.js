const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const auth = require('../Middlewares/auth')

router.get('/',userController.home)

module.exports = router