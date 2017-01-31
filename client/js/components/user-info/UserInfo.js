import React, { Component, PropTypes } from 'react';
import { Loader } from '../';
import {
    UserInfoAvatar,
    UserInfoName,
    UserInfoRepos
} from './';

export default class UserInfo extends Component {
    renderUserInfo() {
        const { userInfo } = this.props;

        return (
            <div>
                <UserInfoAvatar avatarUrl={userInfo.get('avatar_url')} />
                <UserInfoName name={userInfo.get('name')} />
                <UserInfoRepos reposUrl={userInfo.get('repos_url')} />
            </div>
        )
    }

    render() {
        const { isLoading } = this.props;

        return (
            <div>
                { isLoading ?
                    <Loader />
                    : this.renderUserInfo()
                }
            </div>
        );
    }
}

UserInfo.propTypes = {
    userInfo: PropTypes.object.isRequired,
    isLoading: PropTypes.bool
};
