import React, { Component, PropTypes } from 'react';

export default class InputField extends Component {
    render() {
        const { className, containerClassName, placeholder, type, maxLength } = this.props;
        const { onChange, onClick, onKeyUp, onFocus, onBlur } = this.props;
        const fieldProps = {
            className: `input-field ${className}`,
            placeholder: placeholder,
            maxLength: maxLength,
            onChange: onChange,
            onClick: onClick,
            onKeyUp: onKeyUp,
            onFocus: onFocus,
            onBlur: onBlur
        };

        return (
            <div className={`input-field-container ${containerClassName}`}>
                {
                    type ?
                        <input type={type} {...fieldProps} />
                        : <textarea { ...fieldProps } />
                }

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
    onClick: () => {},
    onKeyUp: () => {},
    onFocus: () => {},
    onBlur: () => {},
};

InputField.propTypes = {
    className: PropTypes.string.isRequired,
    containerClassName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    maxLength: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    onKeyUp: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
};
