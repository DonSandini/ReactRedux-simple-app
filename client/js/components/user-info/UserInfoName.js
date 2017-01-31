import React, { Component, PropTypes } from 'react';

export default class UserInfoName extends Component {
    render() {
        const { name } = this.props;

        return (
            <div className="user-info-name">
                { name }
            </div>
        );
    }
}

UserInfoName.defaultProps = {
    name: ''
};

UserInfoName.propTypes = {
    name: PropTypes.string
};
