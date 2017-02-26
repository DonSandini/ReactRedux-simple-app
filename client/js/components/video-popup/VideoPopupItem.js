import React, { Component, PropTypes } from 'react';
import { InputField, YoutubeVideo } from '../'
import {
    VideoPopupVideoActions,
    VideoPopupProfileInfo,
    VideoPopupCommentReply
} from './'

export default class VideoPopupItem extends Component {
    constructor() {
        super();

        this.onCommentInputChange = this.onCommentInputChange.bind(this);
        this.onReplyTextChange = this.onReplyTextChange.bind(this);
    }
    //TODO: finish comments and replies consumation from components.
    onCommentInputChange(event) {
        const { setCommentText } = this.props;

        setCommentText({ commentText: event.target.value });
    }

    onReplyTextChange(event) {
        const { setReplyText } = this.props;

        setReplyText({ replyText: event.target.value });
    }

    render() {
        const { videoData } = this.props;
        debugger
        return (
            <section className="video-popup-item">
                <div className="video-popup-top-part">
                    <YoutubeVideo
                        videoUrl={videoData.get('embedUrl')}
                    />
                    <VideoPopupVideoActions />
                    <InputField
                        type="text"
                        containerClassName="video-comment"
                        className="video-comment-input"
                        placeholder="comment..."
                        onChange={this.onCommentInputChange}
                    />
                </div>
                <div className="comment-section">
                    <VideoPopupProfileInfo />
                    <VideoPopupCommentReply />
                </div>
            </section>
        );
    }
}

VideoPopupItem.defaultProps = {
    videoUrl: ''
};

VideoPopupItem.propTypes = {
    videoUrl: PropTypes.string.isRequired,
    setCommentText: PropTypes.func.isRequired,
    setReplyText: PropTypes.func.isRequired,
};
