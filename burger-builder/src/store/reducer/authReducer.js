import * as actionTypes from '../action/actionTypes';
import {updateObject} from "../util";

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const authStart = oldState => {
    return updateObject(oldState, {error: null, loading: true});
};

const authSuccess = (oldState, action) => {
    return updateObject(oldState, {
        error: null,
        loading: false,
        token: action.token,
        userId: action.userId
    });
};

const authFail = (oldState, action) => {
    return updateObject(oldState, {
        error: action.error,
        loading: false
    });
};

const authReducer = (oldState = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(oldState);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(oldState, action);
        case actionTypes.AUTH_FAILED:
            return authFail(oldState, action);
        default:
            return oldState;
    }
};

export default authReducer;