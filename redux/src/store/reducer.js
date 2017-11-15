const initialState = {
    counter: 0
}

const reducer = (oldState = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: oldState.counter + action.value
            }
        case 'DECREMENT':
            return {
                counter: oldState.counter - action.value
            }
        case 'ADD':
            return {
                counter: oldState.counter + action.value
            }
        case 'SUBSTRACT':
            return {
                counter: oldState.counter - action.value
            }
        default:
            return oldState;
    }
};

export default reducer;