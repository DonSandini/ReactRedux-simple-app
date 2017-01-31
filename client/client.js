/* eslint no-console: [0] */
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './js/redux/createStore';
import { Root } from './js/containers';

const store = createStore();
const rootElement = document.getElementById('app');

let components = [
    <Root key="root" store={store} />
];

ReactDOM.render(
    <div>{components}</div>,
    rootElement
);
