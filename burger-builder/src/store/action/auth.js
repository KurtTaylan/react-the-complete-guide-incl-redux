import * as actionTypes from './actionTypes';
import * as go from '../../client'


export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expireTime');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

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

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expireTime = new Date(localStorage.getItem('expireTime'));
      if (expireTime <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(userId, token));
        let difference = expireTime.getTime() - new Date().getTime();
        console.log('difference: ', difference / 1000);
        dispatch(checkAuthTimeout((difference / 1000)));
      }
    }
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
        
        const expireTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expireTime', expireTime);
        localStorage.setItem('userId', response.data.localId);
        
        dispatch(authSuccess(response.data.localId, response.data.idToken));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        console.log(error.response);
        dispatch(authFailed(error.response.data.error));
      });
  }
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  }
};

