const cursosRouter = require('express').Router();

const { getCursos, getCurso, postCurso, deleteCurso } = require('./cursosController.js');
const { getCursosQueryValidators, postCursoValidators, cursoExiste } = require('./cursosValidators');
const { checkValidationResult } = require('../utils/commonValidators')
const { getAlumnos, getAlumnoDestacado } = require('../alumnosCRUD/alumnosController');

cursosRouter.get('/', getCursosQueryValidators, checkValidationResult, getCursos);
cursosRouter.post('/', postCursoValidators, checkValidationResult, postCurso);

cursosRouter.get('/:id', cursoExiste, getCurso);
cursosRouter.delete('/:id', deleteCurso);

cursosRouter.get('/:id/alumnos', cursoExiste, getAlumnos);

cursosRouter.get('/:id/alumnos/destacado', cursoExiste, getAlumnoDestacado);

module.exports = cursosRouter;