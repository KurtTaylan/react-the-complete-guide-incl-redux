import * as actionTypes from '../action';

const initialState = {
    counter: 0,
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
        default:
            return oldState;
    }
};

export default reducer;