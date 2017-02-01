import React, { Component, PropTypes } from 'react';
import { Loader } from '../';
import {
    UserInfoItem
} from './';

export default class UserInfo extends Component {
    renderUserInfo() {
        const { userInfo } = this.props;

        return (
            <div className="user-info-wrapper">
                <UserInfoItem
                    itemClassName="avatar"
                    itemLabel="Avatar"
                >
                    <img src={userInfo.get('avatar_url')} alt=""/>
                </UserInfoItem>
                <UserInfoItem
                    itemClassName="name"
                    itemLabel="Name"
                >
                    { userInfo.get('name') }
                </UserInfoItem>
                <UserInfoItem
                    itemClassName="repos-url"
                    itemLabel="Repos URL"
                >
                    <a href={userInfo.get('repos_url')} target="_blank">
                        { userInfo.get('repos_url') }
                    </a>
                </UserInfoItem>
                <UserInfoItem
                    itemClassName="username"
                    itemLabel="Username"
                >
                    { userInfo.get('login') }
                </UserInfoItem>
                <UserInfoItem
                    itemClassName="created-at"
                    itemLabel="Created at"
                >
                    { new Date(userInfo.get('created_at')).toDateString() }
                </UserInfoItem>
                <UserInfoItem
                    itemClassName="updated-at"
                    itemLabel="Updated at"
                >
                    { new Date(userInfo.get('updated_at')).toDateString() }
                </UserInfoItem>

            </div>
        )
    }

    render() {
        const { isLoading } = this.props;

        return (
            <div className="user-info-container">
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
