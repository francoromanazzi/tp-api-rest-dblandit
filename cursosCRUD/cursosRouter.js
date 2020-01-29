const cursosRouter = require('express').Router();

const { getCursos, getCurso, postCurso, deleteCurso } = require('./cursosController.js');
const { postValidators } = require('./cursosValidators');
const { getAlumnos, getAlumnoDestacado } = require('../alumnosCRUD/alumnosController');

cursosRouter.get('/', getCursos);
cursosRouter.post('/', postValidators, postCurso);

cursosRouter.get('/:id', getCurso);
cursosRouter.delete('/:id', deleteCurso);

cursosRouter.get('/:id/alumnos', getAlumnos);

cursosRouter.get('/:id/alumnos/destacado', getAlumnoDestacado);

module.exports = cursosRouter;