import * as actionTypes from './actionTypes';
import * as go from '../../client'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (userId, token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
};

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    }
};

export const auth = (email, password, isSignIn) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let client = go.authSignUpAPI;
        if (isSignIn) {
            client = go.authSignInAPI;
        }
        client.post(null, authData)
            .then(response => {
                console.log(response.data);
                dispatch(authSuccess(response.data.localId, response.data.idToken));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFailed(error));
            });
    }
};

