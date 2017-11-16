import {createStore, combineReducers, applyMiddleware} from 'redux';
import burgerBuilderReducer from './reducer/bugerBuilderReducer';

const logger = store => next => action => {
    console.log('[Middleware] Dispatching, ', action);
    let result = next(action);
    console.log('[Middleware] Next State, ', store.getState());
    return result;
}

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;