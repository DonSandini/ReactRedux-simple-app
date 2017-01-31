import React, { Component, PropTypes } from 'react';

export default class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        );
    }
}