const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (oldState = initialState, action) => {

    if (action.type === 'INC_COUNTER'){
        return {
            ...oldState,
            counter: oldState.counter + 1
        }
    }

    if (action.type === 'ADD_COUNTER'){
        return {
            ...oldState,
            counter: oldState.counter + action.value
        }
    }
    return oldState;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription
store.subscribe(() => {
    console.log('[Subscription] ', store.getState())
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

