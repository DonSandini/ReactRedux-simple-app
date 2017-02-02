import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/users';

import { UserInfo } from '../components/user-info';

class UserInfoContainer extends Component {
    componentWillMount() {
        const { isLoading, username, getUserInfo } = this.props;

        //make a request if the user refreshes the page.
        if (!isLoading) {
            getUserInfo({ username });
        }
    }

    renderUserNotFound() {
        return (
            <div className="user-not-found">
                User not found.
            </div>
        )
    }

    render() {
        const { isLoading, isUserInfoFound, userInfo } = this.props;

        return (
            <div>
                { isUserInfoFound ?
                    this.renderUserNotFound()
                    : <UserInfo isLoading={isLoading} userInfo={userInfo} />
                }
            </div>
        );
    }
}

UserInfoContainer.displayName = 'UserInfoContainer';

UserInfoContainer.propTypes = {
    userInfo: PropTypes.object.isRequired,
    getUserInfo: PropTypes.func.isRequired,
    isUserInfoFound: PropTypes.bool,
    isLoading: PropTypes.bool
};

export default connect(
    //	Map state to props
    state => ({
        isUserInfoFound: state.users.get('isUserInfoFound'),
        userInfo: state.users.get('userInfo'),
        isLoading: state.loaders.get('users'),
        username: state.router.params.username
    }),
    //	Bind actions to props
    dispatch => bindActionCreators({
        getUserInfo
    }, dispatch)
)(UserInfoContainer);
