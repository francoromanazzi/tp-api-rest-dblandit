import axios from 'axios';

export const getCursos = (anio, duracion) => dispatch => {
    let url = '/api/v1/cursos';
    if (anio && duracion) url += `?anioDictado=${anio}&duracion=${duracion}`
    else if (anio) url += `?anioDictado=${anio}`
    else if (duracion) url += `?duracion=${duracion}`

    axios
        .get(url)
        .then(res => {
            console.log(res);
            dispatch({
                type: 'GET_CURSOS',
                payload: res.data.message
            });
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: 'GET_ERRORS',
                payload: { error: err.response.data }
            });
        });
};

export const deleteCurso = cursoId => dispatch => {
    axios
        .delete(`/api/v1/cursos/${cursoId}`)
        .then(res => {
            console.log(res);
            dispatch({
                type: 'DELETE_CURSO',
                payload: res.data.message._id
            });
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: 'GET_ERRORS',
                payload: { error: err.response.data }
            });
        });
}

export const postCurso = (curso, history) => dispatch => {
    axios
        .post('/api/v1/cursos/', curso)
        .then(res => {
            console.log(res);
            dispatch({
                type: 'ADD_CURSO',
                payload: res.data.message
            });
            history.push('/cursos');
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: 'GET_ERRORS',
                payload: { error: err.response.data }
            });
        });  
}