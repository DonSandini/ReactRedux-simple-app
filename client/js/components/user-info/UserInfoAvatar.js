import React, { Component, PropTypes } from 'react';

export default class UserInfoAvatar extends Component {
    render() {
        return (
            <div>
                UserInfoAvatar
            </div>
        );
    }
}

UserInfoAvatar.propTypes = {
    userInfo: PropTypes.object.isRequired
};
