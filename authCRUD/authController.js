require('dotenv').config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Auth = require('../models/Auth')

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
                    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                        expiresIn: 86400 // 24 horas
                    });
                      
                    res.status(200).json({
                        code: 0,
                        message: {
                            auth: true,
                            token: token
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
            // Crear token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: 86400 // 24 horas
            });
            
            res.status(200).json({
                code: 0,
                message: {
                    auth: true,
                    token: token
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

module.exports = { login, register };