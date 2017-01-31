import React, { Component, PropTypes } from 'react';

export default class UserInfoAvatar extends Component {
    render() {
        const { avatarUrl } = this.props;

        return (
            <div className="user-info-avatar">
                <img src={avatarUrl} alt=""/>
            </div>
        );
    }
}

UserInfoAvatar.defaultProps = {
    avatarUrl: ''
};

UserInfoAvatar.propTypes = {
    avatarUrl: PropTypes.string
};
