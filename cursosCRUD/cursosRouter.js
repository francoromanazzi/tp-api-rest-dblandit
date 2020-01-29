const cursosRouter = require('express').Router();

const { getCursos, getCurso, postCurso, deleteCurso } = require('./cursosController.js');
const { postValidators, cursoExiste } = require('./cursosValidators');
const { getAlumnos, getAlumnoDestacado } = require('../alumnosCRUD/alumnosController');

cursosRouter.get('/', getCursos);
cursosRouter.post('/', postValidators, postCurso);

cursosRouter.get('/:id', cursoExiste, getCurso);
cursosRouter.delete('/:id', deleteCurso);

cursosRouter.get('/:id/alumnos', cursoExiste, getAlumnos);

cursosRouter.get('/:id/alumnos/destacado', cursoExiste, getAlumnoDestacado);

module.exports = cursosRouter;