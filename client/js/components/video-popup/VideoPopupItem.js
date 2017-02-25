import React, { Component, PropTypes } from 'react';
import { Avatar, Button, Icon, InputField, YoutubeVideo } from '../'

export default class VideoPopupItem extends Component {
    constructor() {
        super();

        this.onCommentTextareaChange = this.onCommentTextareaChange.bind(this);
        this.onReplyTextChange = this.onReplyTextChange.bind(this);
    }

    onCommentTextareaChange(event) {
        const { setCommentText } = this.props;

        setCommentText({ commentText: event.target.value });
    }

    onReplyTextChange(event) {

    }

    render() {
        const { popupId } = this.props;
        const { closePopup } = this.props;

        return (
            <div className="video-popup-item-container">
                <Icon iconId="close" onClick={closePopup} />
                <div className="video-popup-top-part">
                    <YoutubeVideo
                        url="https://www.youtube.com/watch?v=Y1PVmANeyAg"
                    />
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
                        type="text"
                        containerClassName="video-comment"
                        className="video-comment-input"
                        placeholder="comment..."
                        onChange={this.onCommentTextareaChange}

                    />
                </div>
                <div className="comment-section">
                    <div className="profile-info">
                        <div className="profile-meta">
                            <Avatar avatarId={1} />
                            <div className="profile-meta-inner">
                                <div className="comment-author">
                                    Stoyan Daskaloff
                                </div>
                                <div className="comment-date">
                                    March 7, 2013 at 7:30 pm
                                </div>
                            </div>
                        </div>
                        <div className="author-description">
                            Sed quis diam egestas, egestas mauris in, dapibus eros. Duis nisi nulla, accumsan eu libero sit amet, faucibus ornare nisi. Phasellus cursus dolor ante, at placerat est tincidunt vel. In ullamcorper pulvinar est id congue. Pellentesque scelerisque ante vel justo varius, non aliquet est eleifend. Aliquam erat volutpat. Curabitur blandit, lorem eget tincidunt scelerisque, mauris felis pellentesque dolor, et adipiscing nisi ipsum eget est.
                        </div>
                        <div className="comment-author-actions">
                            <Button className="like" text="Like">
                                <Icon iconId="like" />
                            </Button>
                            <Button className="share" text="Share">
                                <Icon iconId="share" />
                            </Button>
                            <Button className="comment" text="Comment">
                                <Icon iconId="comment" />
                            </Button>
                            <Button className="report" text="report">
                                <Icon iconId="report" />
                            </Button>
                        </div>
                    </div>
                    <div className="reply-section">
                        <div className="reply-actions">
                            <Button className="active" text="comment" />
                            <Button text="photo" />
                            <Button text="feedback" />
                        </div>
                        <InputField
                            type="text"
                            className="video-comment-reply"
                            placeholder="reply..."
                            onChange={this.onReplyTextChange}

                        />
                    </div>
                </div>
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
