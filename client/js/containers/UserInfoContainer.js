import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserInfo } from '../components/user-info';

class UserInfoContainer extends Component {

    componentWillMount() {
        debugger;
    }

    renderUserNotFound() {
        return (
            <div className="user-not-found">
                User not found.
            </div>
        )
    }

    render() {
        const { isUserInfoFound, userInfo } = this.props;
        debugger;
        return (
            <div>
                { isUserInfoFound ?
                    this.renderUserNotFound()
                    : <UserInfo userInfo={userInfo} />
                }
            </div>
        );
    }
}

UserInfoContainer.displayName = 'UserInfoContainer';

UserInfoContainer.propTypes = {
    isUserInfoFound: PropTypes.bool.isRequired,
    userInfo: PropTypes.object.isRequired
};

export default connect(
    //	Map state to props
    state => ({
        isUserInfoFound: state.users.get('isUserInfoFound'),
        userInfo: state.users.get('userInfo'),
    }),
    //	Bind actions to props
    dispatch => bindActionCreators({

    }, dispatch)
)(UserInfoContainer);
