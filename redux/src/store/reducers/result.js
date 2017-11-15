import * as actionTypes from '../action';

const initialState = {
    results: []
}

const reducer = (oldState = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...oldState,
                results: oldState.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...oldState,
                results: oldState.results.filter(result => result.id !== action.id)
            }

        default:
            return oldState;
    }
};

export default reducer;