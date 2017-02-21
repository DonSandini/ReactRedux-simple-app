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
        const { onKeyDown } = this.props;

        return (
            <div className="search-input-wrapper">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    onChange={this.setSearchValue}
                    onKeyDown={onKeyDown}
                />
            </div>
        );
    }
}


SearchInput.defaultProps = {
    onKeyDown: () => {},
    setSearchText: () => {}
};

SearchInput.propTypes = {
    onKeyDown: PropTypes.func.isRequired,
    setSearchText: PropTypes.func.isRequired
};
