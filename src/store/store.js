import {createStore}  from 'redux'
import countereducer from '../reducer/countereducer';
import rootReducer from '../reducer/rootReducer';



const store =createStore(rootReducer);

export default store;