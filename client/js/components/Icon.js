import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
    render() {
        const { iconId, onClick } = this.props;
        const imageUrl = require(`../../images/icon-${iconId}.png`);

        return (
            <div className={`icon-wrapper icon-wrapper-${iconId}`} onClick={onClick}>
                <img
                    className={`icon-${iconId}`}
                    src={imageUrl}
                    alt=""
                />
            </div>
        );
    }
}

Icon.defaultProps = {
    iconId: '',
    onClick: () => {}
};

Icon.propTypes = {
    iconId: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
