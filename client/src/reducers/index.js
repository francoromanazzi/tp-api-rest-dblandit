import { combineReducers } from 'redux';

import cursosReducer from './cursos';
import authReducer from './auth';

export default combineReducers({
    cursos: cursosReducer,
    auth: authReducer
})