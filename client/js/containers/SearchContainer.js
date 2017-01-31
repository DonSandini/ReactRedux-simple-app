import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserInfo, resetUserInfo } from '../actions/users';
import { setSearchText } from '../actions/search';
import { goToUserId } from '../actions/location';
import { Button, SearchInput } from '../components';

class SearchContainer extends Component {
    constructor() {
        super();

        this.onButtonClick = this.onButtonClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onButtonClick() {
        const { getUserInfo, goToUserId, searchText } = this.props;

        if (searchText !== '') {
            getUserInfo({ username: searchText });
            goToUserId(searchText)
        }
    }

    onKeyDown(e) {
        if (e.keyCode === 13) { //on "Enter" press
            this.onButtonClick();
        }
    }

    render() {
        const { resetUserInfo, searchText, setSearchText } = this.props;

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
                    onClick={this.onButtonClick}
                />
                <Button
                    className="button reset-search-github-user-button"
                    text="Reset search"
                    onClick={resetUserInfo}
                />
            </div>
        );
    }
}

SearchContainer.displayName = 'SearchContainer';

SearchContainer.defaultProps = {
    searchText: '',
    getUserInfo: () => {},
    resetUserInfo: () => {},
    setSearchText: () => {}
};

SearchContainer.propTypes = {
    searchText: PropTypes.string.isRequired,
    getUserInfo: PropTypes.func.isRequired,
    goToUserId: PropTypes.func.isRequired,
    resetUserInfo: PropTypes.func.isRequired,
    setSearchText: PropTypes.func.isRequired
};

export default connect(
    //	Map state to props
    state => ({
        searchText: state.search.get('searchText'),
    }),
    //	Bind actions to props
    dispatch => bindActionCreators({
        getUserInfo,
        goToUserId,
        resetUserInfo,
        setSearchText
    }, dispatch)
)(SearchContainer);
