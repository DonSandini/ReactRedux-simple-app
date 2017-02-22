import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
    render() {
        const { iconId } = this.props;
        
        return (
            <img
                className={`icon-${iconId}`}
                src={`./images/icon-${iconId}.png`}
                alt=""
            />
        );
    }
}

Icon.defaultProps = {
    iconId: ''
};

Icon.propTypes = {
    iconId: PropTypes.string.isRequired
};
