import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import * as reducers from '.';

console.log(reducers)
export default combineReducers({ ...reducers, router: routerStateReducer });
