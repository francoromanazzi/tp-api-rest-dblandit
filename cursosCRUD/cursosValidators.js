const { check } = require('express-validator');
const Curso = require('../models/Curso');

const postValidators = [
    
];

const cursoExiste = (req, res, next) => {
    const { id } = req.params;

    Curso.findById(id)
        .then(curso => {
            if (!curso) {
                res.status(404).json({
                    code: 12,
                    message: "El curso no fue encontrado"
                })
            } else {
                req.curso = curso;
                next();
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

module.exports = { postValidators, cursoExiste };