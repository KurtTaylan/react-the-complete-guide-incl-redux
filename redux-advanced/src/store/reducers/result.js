import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../util";

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT:
            return updateObject(state, {results: state.results.filter(result => result.id !== action.resultElId)});
    }
    return state;
};

export default reducer;