import React, { Component, PropTypes } from 'react';
import { Modal, Transition } from 'react-overlays';
import classNames from 'classnames';

export default class Popup extends Component {
    constructor() {
        super();

        this.state = { isModalShown: false };
    }

    componentWillMount() {
        const { transitionIn } = this.props;

        this.setState({ isModalShown: transitionIn });
    }

    componentDidMount() {
        this.isUnmounted = false;
    }

    componentWillReceiveProps(nextProps) {
        if (!this.isUnmounted) {
            const { onExited, transitionIn, timeout } = nextProps;

            if (transitionIn) {
                this.setState({ isModalShown: true });
            } else {
                setTimeout(() => {
                    this.setState({ isModalShown: false });
                    onExited();
                }, timeout + 50);
            }
        }
    }

    render() {
        const { className, transitionClassName, transitionIn, timeout } = this.props;
        const { onEnter, onBackdropClick, onFocus } = this.props;
        const { isModalShown } = this.state;

        return (
            <Transition
                enteringClassName={classNames(transitionClassName, 'popup-entering')}
                enteredClassName={classNames(transitionClassName, 'popup-entered')}
                exitingClassName={classNames(transitionClassName, 'popup-exiting')}
                exitedClassName={classNames(transitionClassName, 'popup-exited')}
                in={transitionIn}
                timeout={timeout}
                transitionAppear={true}
                onEnter={onEnter}
            >
                <Modal
                    enforceFocus={false}
                    show={isModalShown}
                    backdropClassName="popup-backdrop"
                    onBackdropClick={onBackdropClick}
                    className="popup-modal"
                    containerClassName="overlay"
                >
                    <div className={classNames(className, 'modal-wrapper')} onFocus={onFocus}>
                        { this.props.children }
                    </div>
                </Modal>
            </Transition>
        );
    }
}

Popup.defaultProps = {
    'className': '',
    'transitionClassName': '',
    'transitionIn': true,
    'timeout': 200,
    'childrenOnly': false,
    'onEnter': () => {},
    'onExited': () => {},
    'onBackdropClick': () => {},
    'onFocus': () => {}
};

Popup.propTypes = {
    'transitionIn': PropTypes.bool.isRequired,
    'transitionClassName': PropTypes.string,
    'className': PropTypes.string,
    'timeout': PropTypes.number,
    'childrenOnly': PropTypes.bool,
    'onEnter': PropTypes.func,
    'onBackdropClick': PropTypes.func,
    'onFocus': PropTypes.func,
    'children': PropTypes.any
};
