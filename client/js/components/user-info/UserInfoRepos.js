import React, { Component, PropTypes } from 'react';

export default class UserInfoRepos extends Component {
    render() {
        const { reposUrl } = this.props;

        return (
            <div className="user-repos-url">
                <a href={reposUrl} target="_blank">
                    { reposUrl }
                </a>
            </div>
        );
    }
}

UserInfoRepos.defaultProps = {
    reposUrl: ''
};

UserInfoRepos.propTypes = {
    reposUrl: PropTypes.string
};
