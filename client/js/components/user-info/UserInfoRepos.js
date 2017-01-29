import React, { Component, PropTypes } from 'react';

export default class UserInfoRepos extends Component {
    render() {
        return (
            <div>
                UserInfoRepos
            </div>
        );
    }
}

UserInfoRepos.propTypes = {
    userInfo: PropTypes.object.isRequired
};
