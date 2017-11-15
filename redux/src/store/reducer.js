import * as actionTypes from './action';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (oldState = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...oldState,
                counter: oldState.counter + action.value
            }
        case actionTypes.DECREMENT:
            return {
                ...oldState,
                counter: oldState.counter - action.value
            }
        case actionTypes.ADD:
            return {
                ...oldState,
                counter: oldState.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...oldState,
                counter: oldState.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...oldState,
                results: oldState.results.concat({id: new Date(), value: oldState.counter})
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