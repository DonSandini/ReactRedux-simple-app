import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/users';
import { setSearchText } from '../actions/search';
import { Button, SearchInput } from '../components';

class SearchContainer extends Component {
    constructor() {
        super();

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        const { getUserInfo, searchText } = this.props;

        getUserInfo({ username: searchText })
    }

    render() {
        const { searchText, setSearchText } = this.props;

        return (
            <div>
                <SearchInput text={searchText} setSearchText={setSearchText} />
                <Button onClick={this.onButtonClick} />
            </div>
        );
    }
}

SearchContainer.displayName = 'SearchContainer';

SearchContainer.propTypes = {
    searchText: PropTypes.string.isRequired,
    getUserInfo: PropTypes.func.isRequired,
    setSearchText: PropTypes.func.isRequired
};
function test(state) {
    debugger;
}
export default connect(
    //	Map state to props
    state => ({
        searchText: state.search.get('searchText'),
    }),
    //	Bind actions to props
    dispatch => bindActionCreators({
        getUserInfo,
        setSearchText
    }, dispatch)
)(SearchContainer);
