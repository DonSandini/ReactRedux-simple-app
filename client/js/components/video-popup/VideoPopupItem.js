import React, { Component, PropTypes } from 'react';
import { Button, Icon, InputField } from '../'

export default class VideoPopupItem extends Component {
    constructor() {
        super();

        this.onCommentTextareaChange = this.onCommentTextareaChange.bind(this);
    }

    onCommentTextareaChange(event) {
        const { setCommentText } = this.props;

        setCommentText({ commentText: event.target.value });
    }

    render() {
        const { popupId } = this.props;
        const { closePopup } = this.props;

        return (
            <div className="video-popup-item-container">
                <Icon iconId="close" onClick={closePopup} />
                <div className="video-container">
                    <video className="video" controls="">
                        {/* in real app use custom url to video based on popupId */}
                        <source src="http://0.s3.envato.com/h264-video-previews/80fad324-9db4-11e3-bf3d-0050569255a8/490527.mp4" />
                    </video>
                </div>
                <div className="video-actions">
                    <div className="left-actions">
                        <Button className="like" text="Like">
                            <Icon iconId="like" />
                        </Button>
                        <Button className="share" text="Share">
                            <Icon iconId="share" />
                        </Button>
                    </div>
                    <div className="right-actions">
                        <Button className="button-black edit" text="Edit" />
                        <Button className="button-red delete" text="Delete" />
                    </div>
                </div>
                <InputField
                    containerClassName="video-comment"
                    className="video-comment-textarea"
                    placeholder="comment..."
                    onChange={this.onCommentTextareaChange}

                />
            </div>
        );
    }
}

VideoPopupItem.defaultProps = {
    popupId: '',
    closePopup: () => {}
};

VideoPopupItem.propTypes = {
    popupId: PropTypes.string.isRequired,
    closePopup: PropTypes.func.isRequired
};
