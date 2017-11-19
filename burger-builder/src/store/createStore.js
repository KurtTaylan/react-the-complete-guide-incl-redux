import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import burgerBuilderReducer from './reducer/burgerBuilderReducer';
import orderReducer from "./reducer/orderReducer";

const logger = store => next => action => {
    console.log('[Middleware] Dispatching, ', action);
    let result = next(action);
    console.log('[Middleware] Next State, ', store.getState());
    return result;
};

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger, thunk)));

export default store;