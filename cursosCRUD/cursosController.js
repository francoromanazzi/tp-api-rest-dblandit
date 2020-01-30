const Curso = require('../models/Curso');

const getCursos = (req, res) => {
    Curso.find(req.query)
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