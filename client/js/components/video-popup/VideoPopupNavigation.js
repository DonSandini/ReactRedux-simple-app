import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from '../';

export default class VideoPopupNavigation extends Component {
    render() {
        return (
            <div className="video-popup-navigation">
                <Button className="button-black">
                    <Link to="/video-popup" activeClassName="active">
                        Open popup
                    </Link>
                </Button>
            </div>
        );
    }
}

VideoPopupNavigation.defaultProps = {
    VideoPopupNavigationId: '',
    className: '',
    text: '',
    onClick: () => {
    }
};

VideoPopupNavigation.propTypes = {
    VideoPopupNavigationId: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
