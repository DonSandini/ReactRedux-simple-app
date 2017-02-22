import React, { Component, PropTypes } from 'react';
import { Button, Icon } from '../'

export default class VideoPopupItem extends Component {
    render() {
        const { popupId } = this.props;

        return (
            <div className="video-popup-item-container">
                <Icon iconId="close" />
                <div className="video-container">
                    <video src={`./videos/drooble-${popupId}.mp4`} />
                </div>
                <div className="video-actions">
                    <Button className="like" text="Like">
                        <Icon iconId="like" />
                    </Button>
                    <Button className="share" text="Share">
                        <Icon iconId="share" />
                    </Button>
                    <Button className="edit" text="Edit" />
                    <Button className="delete" text="Delete" />
                    <textarea className="popup-comment" rows="1" />
                </div>
            </div>
        );
    }
}

VideoPopupItem.defaultProps = {
    popupId: ''
};

VideoPopupItem.propTypes = {
    popupId: PropTypes.string.isRequired
};
