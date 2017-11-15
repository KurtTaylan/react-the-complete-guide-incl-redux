const initialState = {
    counter: 0,
    results: []
}

const reducer = (oldState = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...oldState,
                counter: oldState.counter + action.value
            }
        case 'DECREMENT':
            return {
                ...oldState,
                counter: oldState.counter - action.value
            }
        case 'ADD':
            return {
                ...oldState,
                counter: oldState.counter + action.value
            }
        case 'SUBSTRACT':
            return {
                ...oldState,
                counter: oldState.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...oldState,
                results: oldState.results.concat({id: new Date(), value: oldState.counter})
            }
        case 'DELETE_RESULT':
            return {
                ...oldState,
                results: oldState.results.filter(result => result.id !== action.id)
            }
        default:
            return oldState;
    }
};

export default reducer;