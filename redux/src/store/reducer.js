const initialState = {
    counter: 0
}

const reducer = (oldState = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: oldState.counter + 1
        }
    }


    return oldState;
};

export default reducer;