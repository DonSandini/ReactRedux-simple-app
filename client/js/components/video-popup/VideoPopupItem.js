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
        return (
            <section className="video-popup-item">
                <div className="video-popup-top-part">
                    <YoutubeVideo
                        url="https://www.youtube.com/watch?v=kWv19a5F-gk"
                    />
                    <VideoPopupVideoActions />
                    <InputField
                        type="text"
                        containerClassName="video-comment"
                        className="video-comment-input"
                        placeholder="comment..."
                        onChange={this.onCommentTextareaChange}
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
    videoId: ''
};

VideoPopupItem.propTypes = {
    videoId: PropTypes.string.isRequired
};
