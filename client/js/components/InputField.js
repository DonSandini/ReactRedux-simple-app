import React, { Component, PropTypes } from 'react';

export default class InputField extends Component {
    render() {
        const { className, containerClassName, placeholder, maxLength } = this.props;
        const { onChange, onClick } = this.props;

        return (
           <div className={`input-field-container ${containerClassName}`}>
               <textarea
                   className={`input-field ${className}`}
                   placeholder={placeholder}
                   maxLength={maxLength}
                   onChange={onChange}
                   onClick={onClick}
               />
           </div>
        );
    }
}

InputField.defaultProps = {
    className: '',
    containerClassName: '',
    placeholder: '',
    maxLength: '',
    onChange: () => {},
    onClick: () => {}
};

InputField.propTypes = {
    className: PropTypes.string.isRequired,
    containerClassName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    maxLength: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};
