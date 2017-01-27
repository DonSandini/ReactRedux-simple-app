import React from 'react';
import { Redirect, Route } from 'react-router';
import {
    App
} from '../containers';

const getRoutes = ({ getState }) => (
    <Route path="/" component={App}>
        <Redirect from="*" to="/" />
    </Route>
);

export default getRoutes;
