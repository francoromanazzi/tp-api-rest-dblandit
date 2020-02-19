import axios from 'axios';

// Obtener todos los cursos
export const getCursos = () => dispatch => {
  //dispatch(clearErrors());
  //dispatch(setPlaylistsLoading());

  axios
    .get('/api/v1/cursos')
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