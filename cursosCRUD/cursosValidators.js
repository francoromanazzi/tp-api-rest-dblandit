const { check, query, validationResult } = require('express-validator');

const Curso = require('../models/Curso');

const getCursosQueryValidators = [
    query('anioDictado').optional().isInt().withMessage("anioDictado debe ser entero"),
    query('duracion').optional().isNumeric().withMessage("duracion debe ser numerico")
]

const postCursoValidators = [
    check('anioDictado').isInt().withMessage("anioDictado debe ser entero"),
    check('tema').isString().withMessage("tema debe ser string"),
    check('duracion').isNumeric().withMessage("duracion debe ser numerico"),
    check('alumnos.*.nombre').isString().withMessage("alumnos.nombre debe ser string"),
    check('alumnos.*.apellido').isString().withMessage("alumnos.apellido debe ser string"),
    check('alumnos.*.dni').isInt().withMessage("alumnos.dni debe ser entero"),
    check('alumnos.*.direccion').isString().withMessage("alumnos.direccion debe ser string"),
    check('alumnos.*.nota').isNumeric().withMessage("alumnos.nota debe ser numerico")
        .custom(nota => nota >= 0 && nota <= 10 ? Promise.resolve() : Promise.reject("alumnos.nota debe ser entre 0 y 10") ),
];

const checkValidationResult = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 10,
            message: errors.array()
        })
    } else {
        next()
    }
}

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

module.exports = { getCursosQueryValidators, postCursoValidators, cursoExiste, checkValidationResult };