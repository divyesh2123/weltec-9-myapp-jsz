import {applyMiddleware, createStore}  from 'redux'
import countereducer from '../reducer/countereducer';
import rootReducer from '../reducer/rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootsaga from '../saga/rootsaga';


const sagaMiddleware = createSagaMiddleware()
const store =createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootsaga);
export default store;