import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
    render() {
        const { text, onClick } = this.props;

        return (
            <button onClick={onClick}>
                { text }
            </button>
        );
    }
}

Button.defaultProps = {
    text: '',
    onClick: () => {}
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};
