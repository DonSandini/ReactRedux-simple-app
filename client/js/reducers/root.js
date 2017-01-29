import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import * as reducers from '.';

export default combineReducers({ ...reducers, router: routerStateReducer });
