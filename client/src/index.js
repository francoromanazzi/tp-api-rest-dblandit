import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import jwt_decode from 'jwt-decode';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import theme from './theme';

import setAuthToken from './utils/set-auth-token'
import { setCurrentUser } from './actions/auth'


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline>
                <App />
            </CssBaseline>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(`Bearer ${localStorage.jwtToken}`);
    // Decode token and get user info and
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
}