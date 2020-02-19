import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/set-auth-token'

export const loginUser = userData => dispatch => {
    axios
        .post('/api/v1/auth/login', userData)
        .then(res => {
            console.log(res);

            const { token } = res.data.message;

            localStorage.setItem('jwtToken', token);

            // Set token to Auth header
            setAuthToken(token);

            // Decode token to get user data
            const decoded = jwt_decode(token);

            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: 'GET_ERRORS',
                payload: { error: err.response.data }
            });
        });
}

export const setCurrentUser = decoded => {
    return {
      type: 'SET_CURRENT_USER',
      payload: decoded
    };
};