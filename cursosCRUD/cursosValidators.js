const { check, query } = require('express-validator');

const Curso = require('../models/Curso');

const getCursosQueryValidators = [
    query('anioDictado').optional().isInt().withMessage("anioDictado debe ser entero"),
    query('duracion').optional().isNumeric().withMessage("duracion debe ser numerico")
]

const postCursoBodyValidators = [
    check('anioDictado').not().isEmpty().withMessage("anioDictado no puede estar vacio")
        .isInt().withMessage("anioDictado debe ser entero"),
    check('tema').not().isEmpty().withMessage("tema no puede estar vacio")
        .isString().withMessage("tema debe ser string"),
    check('duracion').not().isEmpty().withMessage("duracion no puede estar vacio")
        .isNumeric().withMessage("duracion debe ser numerico"),
    check('alumnos.*.nombre').not().isEmpty().withMessage("alumnos.nombre no puede estar vacio")
        .isString().withMessage("alumnos.nombre debe ser string"),
    check('alumnos.*.apellido').not().isEmpty().withMessage("alumnos.apellido no puede estar vacio")
        .isString().withMessage("alumnos.apellido debe ser string"),
    check('alumnos.*.dni').not().isEmpty().withMessage("alumnos.dni no puede estar vacio")
        .isInt().withMessage("alumnos.dni debe ser entero"),
    check('alumnos.*.direccion').not().isEmpty().withMessage("alumnos.direccion no puede estar vacio")
        .isString().withMessage("alumnos.direccion debe ser string"),
    check('alumnos.*.nota').not().isEmpty().withMessage("alumnos.nota no puede estar vacio")
        .isNumeric().withMessage("alumnos.nota debe ser numerico")
        .custom(nota => nota >= 0 && nota <= 10 ? Promise.resolve() : Promise.reject("alumnos.nota debe ser entre 0 y 10") ),
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

module.exports = { getCursosQueryValidators, postCursoBodyValidators, cursoExiste };