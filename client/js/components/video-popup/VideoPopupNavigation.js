import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class VideoPopupNavigation extends Component {
    render() {
        return (
            <div className="video-popup-navigation">
                <Link to="/videos/1" activeClassName="active">
                    open popup 1
                </Link>
                <Link to="/videos/2" activeClassName="active">
                    open popup 2
                </Link>
            </div>
        );
    }
}

VideoPopupNavigation.defaultProps = {
    VideoPopupNavigationId: '',
    className: '',
    text: '',
    onClick: () => {}
};

VideoPopupNavigation.propTypes = {
    VideoPopupNavigationId: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
