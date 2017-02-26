import React, { Component, PropTypes } from 'react';

export default class NoItems extends Component {
    render() {
        const { itemsName } = this.props;

        return (
            <div className="no-items">
                { `No ${itemsName}` }
            </div>
        );
    }
}

NoItems.defaultProps = {
    itemsName: 'items'
};

NoItems.propTypes = {
    itemsName: PropTypes.string.isRequired
};