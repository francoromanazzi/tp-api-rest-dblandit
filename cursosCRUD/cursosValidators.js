const { check } = require('express-validator');
const Curso = require('../models/Curso');

const postValidators = [
    check('anioDictado').isInt().withMessage("anioDictado debe ser entero"),
    check('tema').isString().withMessage("tema debe ser string"),
    check('duracion').isNumeric().withMessage("duracion debe ser numerico"),
    check('alumnos.*.nombre').isString().withMessage("alumnos.nombre debe ser string"),
    check('alumnos.*.apellido').isString().withMessage("alumnos.apellido debe ser string"),
    check('alumnos.*.dni').isString().withMessage("alumnos.dni debe ser string"),
    check('alumnos.*.direccion').isString().withMessage("alumnos.direccion debe ser string"),
    check('alumnos.*.nota').isNumeric().withMessage("alumnos.nota debe ser numerico"),
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