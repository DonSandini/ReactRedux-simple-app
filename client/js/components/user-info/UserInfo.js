import React, { Component, PropTypes } from 'react';

export default class UserInfo extends Component {
     render() {
        return (
            <div>
                UserInfo
            </div>
        );
    }
}

UserInfo.propTypes = {
    userInfo: PropTypes.object.isRequired
};
