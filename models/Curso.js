const mongoose = require('mongoose');

const Alumno = require('./schemas/Alumno');

const Curso = new mongoose.Schema({
    anioDictado: Number,
    duracion: Number,
    tema: String,
    alumnos: [Alumno]
}, { collection: 'cursos' });

Curso.index({ anioDictado: 1, duracion: 1 });
Curso.index({ duracion: 1 });

Curso.methods.getAlumnoDestacado = function() {
    return this.alumnos
        .reduce((mejorAlumno, alumno) => alumno.nota > mejorAlumno.nota ? alumno : mejorAlumno )
}
    
module.exports = mongoose.model('Curso', Curso);
