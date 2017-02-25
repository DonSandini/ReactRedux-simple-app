/* global __DEVELOPMENT__ */
/* global __DEVTOOLS__ */
import { applyMiddleware, createStore, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createSagaMiddleware from 'redux-saga';
import getRoutes from './routes';
import rootSaga from '../sagas';
import rootReducer from '../reducers/root';
import { createHistory } from 'history';

const sagaMiddleware = createSagaMiddleware();
let storeEnhancers = [
    applyMiddleware(sagaMiddleware),
    reduxReactRouter({ getRoutes, createHistory }),
];

// add this chrome extension https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
if (__DEVELOPMENT__ && __DEVTOOLS__ && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') {
    storeEnhancers.push(window.devToolsExtension());
}

export default () => {
    const enhancedStore = compose(...storeEnhancers)(createStore)(rootReducer);

    sagaMiddleware.run(rootSaga);

    return enhancedStore;
};