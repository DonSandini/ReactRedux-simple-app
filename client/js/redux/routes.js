import React from 'react';
import { Redirect, Route } from 'react-router';
import {
    App,
    SearchContainer,
    VideosContainer,
    UserInfoContainer
} from '../containers';

const getRoutes = ({ getState }) => (
    <Route path="/" component={App}>
        <Route
            path="/search"
            component={SearchContainer}
        />
        <Route
            path="/videos"
            component={VideosContainer}
        />
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
