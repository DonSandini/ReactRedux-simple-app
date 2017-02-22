import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
    render() {
        return (
            <div className="main-navigation">
                <Link to="/search" activeClassName="active">
                    Search gitHub user
                </Link>
                <Link to="/videos" activeClassName="active">
                    Videos
                </Link>
            </div>
        );
    }
}