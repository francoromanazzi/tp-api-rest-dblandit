const authRouter = require('express').Router();

const { checkValidationResult } = require('../utils/commonValidators')
const { postLoginValidators } = require('./authValidators')
const { adminRoute } = require('./authValidators')

const { login, register } = require('./authController')

authRouter.post('/login', postLoginValidators, checkValidationResult, login);

authRouter.post('/register', adminRoute, postLoginValidators, checkValidationResult, register);

module.exports = authRouter