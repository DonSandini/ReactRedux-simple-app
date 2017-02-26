/* eslint no-console: [0] */
import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';
import createStore from './js/redux/enhancedStore';
import { persistedStore } from './js/redux/localStorage';
import { Root } from './js/containers';
import { saveState } from './js/redux/localStorage';

const store = {
    ...createStore(),
    persistedStore
};

store.subscribe(throttle(
    () => {
        saveState({
            videoPopup: store.getState().videoPopup
        })
    },
    1000
));

const rootElement = document.getElementById('app');
let components = [
    <Root key="root" store={store} />
];

ReactDOM.render(
    <div>{components}</div>,
    rootElement
);
