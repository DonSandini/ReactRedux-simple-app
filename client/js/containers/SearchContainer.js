import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserInfo, resetUserInfo } from '../actions/users';
import { setSearchText } from '../actions/search';
import { goToUserId, goHome } from '../actions/location';
import { Button, SearchInput } from '../components';

class SearchContainer extends Component {
    constructor() {
        super();

        this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
        this.onResetButtonClick = this.onResetButtonClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onSearchButtonClick() {
        const { userInfo, getUserInfo, goToUserId, searchText } = this.props;
        const isDifferentSearch = userInfo.get('login') !== searchText;

        if (searchText !== '' && isDifferentSearch) {
            getUserInfo({ username: searchText });
            goToUserId(searchText)
        }
    }
    
    onResetButtonClick() {
        const { goHome, resetUserInfo } = this.props;

        resetUserInfo();
        goHome();
    }

    onKeyDown(e) {
        if (e.keyCode === 13) { //on "Enter" press
            this.onSearchButtonClick();
        }
    }

    render() {
        const { searchText, setSearchText } = this.props;

        return (
            <div className="search-github-user-wrapper">
                <SearchInput
                    text={searchText}
                    setSearchText={setSearchText}
                    onKeyDown={this.onKeyDown}
                />
                <Button
                    className="button search-github-user-button"
                    text="Search for a GitHub user"
                    onClick={this.onSearchButtonClick}
                />
                <Button
                    className="button reset-search-github-user-button"
                    text="Reset search"
                    onClick={this.onResetButtonClick}
                />
            </div>
        );
    }
}

SearchContainer.displayName = 'SearchContainer';

SearchContainer.defaultProps = {
    searchText: '',
    getUserInfo: () => {},
    goHome: () => {},
    resetUserInfo: () => {},
    setSearchText: () => {}
};

SearchContainer.propTypes = {
    searchText: PropTypes.string.isRequired,
    getUserInfo: PropTypes.func.isRequired,
    goToUserId: PropTypes.func.isRequired,
    goHome: PropTypes.func.isRequired,
    resetUserInfo: PropTypes.func.isRequired,
    setSearchText: PropTypes.func.isRequired,
    userInfo: PropTypes.any
};

export default connect(
    //	Map state to props
    state => ({
        searchText: state.search.get('searchText'),
        userInfo: state.users.get('userInfo')
    }),
    //	Bind actions to props
    dispatch => bindActionCreators({
        getUserInfo,
        goToUserId,
        goHome,
        resetUserInfo,
        setSearchText
    }, dispatch)
)(SearchContainer);
