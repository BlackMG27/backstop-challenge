import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import pokeReducer from './pokeReducer';

export const store = createStore(pokeReducer, applyMiddleware(thunk)); 

export default store;