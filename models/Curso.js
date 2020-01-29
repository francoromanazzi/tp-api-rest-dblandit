const mongoose = require('mongoose');

const Alumno = require('./schemas/Alumno');

const Curso = new mongoose.Schema({
    anioDictado: Number,
    duracion: Number,
    tema: String,
    alumnos: [Alumno]
}, { collection: 'cursos' });

module.exports = mongoose.model('Curso', Curso);
