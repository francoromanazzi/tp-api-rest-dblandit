require('dotenv').config();

const jwt = require('jsonwebtoken');
const { check } = require('express-validator');

const Auth = require('../models/Auth')

const postLoginValidators = [
    check('username').isString().withMessage("username debe ser string"),
    check('password').isString().withMessage("password debe ser string")
]

const adminRoute = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token)
        return res.status(401).json({
            code: 2,
            message: 'No autorizado. Se debe suministrar un token'
        });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    Auth.findById(decoded.id, { password: 0 })
        .then(user => {
            if (!user) {
                res.status(404).json({
                    code: 12,
                    message: 'No se encontro el usuario'
                });
            } else {
                next();
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        }); 
}

module.exports = { adminRoute, postLoginValidators }