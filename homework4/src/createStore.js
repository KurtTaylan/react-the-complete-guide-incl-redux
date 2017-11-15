import {combineReducers, createStore} from 'redux';
import personReducer from './store/personReducer';

const rootReducer = combineReducers({
    person: personReducer
});

const store = createStore(rootReducer);


export default store;