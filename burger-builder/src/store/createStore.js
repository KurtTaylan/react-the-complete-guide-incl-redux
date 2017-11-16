import {createStore} from 'redux';
import burgerBuilderReducer from './reducer/bugerBuilderReducer';

const store = createStore(burgerBuilderReducer);

export default store;