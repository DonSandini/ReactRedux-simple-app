import React, { Component, PropTypes } from 'react';

export default class Avatar extends Component {
    render() {
        const { avatarId } = this.props;
        const imageUrl = require(`../../images/avatar-${avatarId}.jpg`);

        return (
            <div className="avatar">
                <img src={imageUrl} alt=""/>
            </div>
        );
    }
}

Avatar.defaultProps = {
    avatarId: ''
};

Avatar.propTypes = {
    avatarId: PropTypes.any.isRequired
};
