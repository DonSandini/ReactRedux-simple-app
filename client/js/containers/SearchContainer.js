import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/users';
import { setSearchText } from '../actions/search';
import { goToUserId } from '../actions/location';
import { Button, SearchInput } from '../components';

class SearchContainer extends Component {
    constructor() {
        super();

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        const { getUserInfo, goToUserId, searchText } = this.props;

        if (searchText !== '') {
            getUserInfo({ username: searchText });
            goToUserId(searchText)
        }
    }

    render() {
        const { searchText, setSearchText } = this.props;

        return (
            <div>
                <SearchInput text={searchText} setSearchText={setSearchText} />
                <Button text="Search for a GitHub user" onClick={this.onButtonClick} />
            </div>
        );
    }
}

SearchContainer.displayName = 'SearchContainer';

SearchContainer.defaultProps = {
    searchText: '',
    getUserInfo: () => {},
    setSearchText: () => {}
};

SearchContainer.propTypes = {
    searchText: PropTypes.string.isRequired,
    getUserInfo: PropTypes.func.isRequired,
    goToUserId: PropTypes.func.isRequired,
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
        setSearchText
    }, dispatch)
)(SearchContainer);
