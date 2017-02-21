import React, { Component, PropTypes } from 'react';

export default class UserInfoItem extends Component {
    render() {
        const { itemLabel, itemClassName } = this.props;

        return (
            <div className={`user-info-item-wrapper ${itemClassName}`}>
                <div className="user-info-item-label">
                    { itemLabel }:
                </div>
                <div className={`user-info-item-${itemClassName}`}>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

UserInfoItem.defaultProps = {
    itemLabel: '',
    itemClassName: ''
};

UserInfoItem.propTypes = {
    itemLabel: PropTypes.string,
    itemClassName: PropTypes.string
};
