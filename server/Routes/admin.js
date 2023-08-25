const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const auth = require('../Middlewares/auth')

module.exports = router