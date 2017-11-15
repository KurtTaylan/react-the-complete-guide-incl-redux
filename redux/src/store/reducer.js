const initialState = {
    counter: 0
}

const reducer = (oldState = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: oldState.counter + action.value
        }
    }

    if (action.type === 'DECREMENT') {
        return {
            counter: oldState.counter - action.value
        }
    }

    if (action.type === 'ADD') {
        return {
            counter: oldState.counter + action.value
        }
    }

    if (action.type === 'SUBSTRACT') {
        return {
            counter: oldState.counter - action.value
        }
    }

    return oldState;
};

export default reducer;