import React from 'react';
import { Redirect, Route } from 'react-router';
import {
    App,
    SearchContainer,
    VideoPopupContainer,
    UserInfoContainer
} from '../containers';
import {
    VideoPopupNavigation,
} from '../components/video-popup';

const getRoutes = ({ getState }) => (
    <Route path="/" component={App}>
        <Route
            path="/search"
            component={SearchContainer}
        />
        <Route
            path="/videos"
            component={VideoPopupNavigation}
        />
        <Route
            path="/video-popup"
            component={VideoPopupContainer}
        />
        <Route
            path="/video-popup/:popupId"
            component={VideoPopupContainer}
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
