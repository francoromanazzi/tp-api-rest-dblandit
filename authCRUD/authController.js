require('dotenv').config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Auth = require('../models/Auth')

const crearToken = user => jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: 86400 // 24 horas
});
    
const login = (req, res) => {
    const { username, password } = req.body;

    Auth.findOne({ username })
        .then(user => {
            if (!user) {
                res.status(404).json({
                    code: 12,
                    message: "El usuario no fue encontrado"
                })
            } else {
                const passwordIsValid = bcrypt.compareSync(password, user.password);
                
                if (!passwordIsValid) {
                    res.status(401).json({ 
                        code: 1,
                        message: "Password invalido"
                    });
                } else {
                    res.status(200).json({
                        code: 0,
                        message: {
                            auth: true,
                            token: crearToken(user)
                        }
                    });   
                }        
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
    
}

const register = (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 8);
    
    Auth.create({ username, password: hashedPassword })
        .then(user => {
            res.status(200).json({
                code: 0,
                message: {
                    auth: true,
                    token: crearToken(user)
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
}

const removeUser = (req, res) => {
    const { id } = req.params;

    Auth.findOneAndDelete({ _id: id, username: { $ne: 'admin' } }, { projection: { password: 0 } })
        .then(user => {
            if (!user) {
                Auth.exists({ _id: id, username: { $eq: 'admin' } })
                    .then(exists => {
                        if (exists) {
                            res.status(401).json({
                                code: 5,
                                message: "No se puede borrar al usuario admin"
                            })
                        } else {
                            res.status(404).json({
                                code: 12,
                                message: "El user no fue encontrado"
                            })
                        }
                    })
            } else {
                res.status(200).json({
                    code: 0,
                    message: user
                })
            }            
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
}

module.exports = { login, register, removeUser };