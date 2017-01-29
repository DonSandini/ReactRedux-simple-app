import React, { Component, PropTypes } from 'react';

export default class UserInfoName extends Component {
    render() {
        return (
            <div>
                UserInfoName
            </div>
        );
    }
}

UserInfoName.propTypes = {
    userInfo: PropTypes.object.isRequired
};
