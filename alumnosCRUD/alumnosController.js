const Curso = require('../models/Curso')

const getAlumnos = (req, res) => {
    res.status(200).json({
        code: 0,
        message: req.curso.alumnos
    });
};

const getAlumnoDestacado = (req, res) => {
    res.status(200).json({
        code: 0,
        message: req.curso.getAlumnoDestacado()
    });
}

module.exports = { getAlumnos, getAlumnoDestacado }