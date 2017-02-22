import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
    render() {
        const { className, text, onClick } = this.props;

        return (
            <button
                className={className}
                onClick={onClick}>
                { text }
            </button>
        );
    }
}

Button.defaultProps = {
    buttonId: '',
    className: '',
    text: '',
    onClick: () => {}
};

Button.propTypes = {
    buttonId: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
