import {applyMiddleware, createStore}  from 'redux'
import countereducer from '../reducer/countereducer';
import rootReducer from '../reducer/rootReducer';
import thunk from 'redux-thunk';


const store =createStore(rootReducer,applyMiddleware(thunk));

export default store;