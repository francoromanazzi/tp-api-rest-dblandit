import { combineReducers } from 'redux';

import cursosReducer from './cursos';
import authReducer from './auth';
import errorReducer from './error'

export default combineReducers({
    cursos: cursosReducer,
    auth: authReducer,
    errors: errorReducer
})