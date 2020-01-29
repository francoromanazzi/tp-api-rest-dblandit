const Curso = require('../models/Curso');

const { validationResult } = require('express-validator');

const getCursos = (req, res) => {
    // TODO: validar query
    const { query = {} } = req;

    Curso.find(query)
        .then(cursos => {
            res.status(200).json({
                code: 0,
                message: cursos
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};

const getCurso = (req, res) => {
    res.status(200).json({
        code: 0,
        message: req.curso
    });
};

const postCurso = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 10,
            message: errors.array()
        })
    }

    const { anioDictado, duracion, tema, alumnos } = req.body;

    const newCurso = new Curso({ anioDictado, duracion, tema, alumnos });

    newCurso.save()
        .then(created => {
            res.status(201).json({
                code: 0,
                message: created
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};

const deleteCurso = (req, res) => {
    const { id } = req.params;

    Factura.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({
                code: 0,
                message: "Curso eliminado correctamente"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};

module.exports = { getCursos, getCurso, postCurso, deleteCurso }