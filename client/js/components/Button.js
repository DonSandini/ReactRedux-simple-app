import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
    componentWillMount() {
        console.log('button mounted')
    }

    componentWillUnmount() {
        console.log('button unmounted')
    }
    render() {
        const { onClick } = this.props;

        return (
            <button onClick={onClick}>
                CLICK ME
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};
