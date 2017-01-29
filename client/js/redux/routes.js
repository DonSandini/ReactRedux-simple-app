import React from 'react';
import { Redirect, Route } from 'react-router';
import {
    App,
    UserInfoContainer
} from '../containers';

const getRoutes = ({ getState }) => (
    <Route path="/" component={App}>
        <Route
            path="/user-info"
            component={UserInfoContainer}
        />
        <Route
            path="/user-info/:username"
            component={UserInfoContainer}
        />
        <Redirect from="*" to="/" />
    </Route>
);

export default getRoutes;
