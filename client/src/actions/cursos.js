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