const cursosRouter = require('express').Router();

const { getCursos, getCurso, postCurso, deleteCurso } = require('./cursosController.js');
const { getCursosQueryValidators, postCursoBodyValidators, cursoExiste } = require('./cursosValidators');
const { checkValidationResult, idEsMongoId } = require('../utils/commonValidators')
const { getAlumnos, getAlumnoDestacado } = require('../alumnosCRUD/alumnosController');

cursosRouter.get('/', getCursosQueryValidators, checkValidationResult, getCursos);
cursosRouter.post('/', postCursoBodyValidators, checkValidationResult, postCurso);

cursosRouter.get('/:id', idEsMongoId, checkValidationResult, cursoExiste, getCurso);
cursosRouter.delete('/:id', idEsMongoId, checkValidationResult, deleteCurso);

cursosRouter.get('/:id/alumnos', idEsMongoId, checkValidationResult, cursoExiste, getAlumnos);

cursosRouter.get('/:id/alumnos/destacado', idEsMongoId, checkValidationResult, cursoExiste, getAlumnoDestacado);

module.exports = cursosRouter;