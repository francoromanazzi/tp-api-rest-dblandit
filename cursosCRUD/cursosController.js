const _ = require('lodash/core')

const Curso = require('../models/Curso');

const getCursos = (req, res) => {
    const querySanitizada = _.pick(req.query, ['anioDictado', 'duracion'])

    Curso.find(querySanitizada)
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

    Curso.findByIdAndDelete(id)
        .then(curso => {
            if (!curso) {
                res.status(404).json({
                    code: 12,
                    message: "El curso no fue encontrado"
                })
            } else {
                res.status(200).json({
                    code: 0,
                    message: curso
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
};

module.exports = { getCursos, getCurso, postCurso, deleteCurso }