import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import burgerBuilderReducer from './reducer/burgerBuilderReducer';

const logger = store => next => action => {
    console.log('[Middleware] Dispatching, ', action);
    let result = next(action);
    console.log('[Middleware] Next State, ', store.getState());
    return result;
}

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger)));

export default store;