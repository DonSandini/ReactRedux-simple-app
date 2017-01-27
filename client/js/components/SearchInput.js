import React, { Component, PropTypes } from 'react';

export default class SearchInput extends Component {
    constructor() {
        super();

        this.setSearchValue = this.setSearchValue.bind(this);
    }

    setSearchValue(e) {
        const { setSearchText } = this.props;

        setSearchText({ searchText: e.target.value })
    }

    render() {
        return (
            <input type="text" onChange={this.setSearchValue} />
        );
    }
}

SearchInput.propTypes = {
    setSearchText: PropTypes.func.isRequired
};
