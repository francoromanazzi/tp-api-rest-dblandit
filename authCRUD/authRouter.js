const authRouter = require('express').Router();

const { checkValidationResult, idEsMongoId } = require('../utils/commonValidators')
const { postLoginValidators } = require('./authValidators')
const { adminRoute } = require('./authValidators')

const { login, register, removeUser } = require('./authController')

authRouter.post('/login', postLoginValidators, checkValidationResult, login);

authRouter.post('/register', postLoginValidators, checkValidationResult, register);

authRouter.delete('/:id', adminRoute, idEsMongoId, checkValidationResult, removeUser);

module.exports = authRouter