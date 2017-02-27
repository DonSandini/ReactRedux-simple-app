import React, { Component, PropTypes } from 'react';
import { InputField, NoItems, YoutubeVideo } from '../'
import {
    VideoPopupVideoActions,
    VideoPopupComment
} from './'

export default class VideoPopupItem extends Component {
    constructor() {
        super();

        this.onCommentInputKeyUp = this.onCommentInputKeyUp.bind(this);
    }

    onCommentInputKeyUp(event) {
        if (event.keyCode === 13 && event.target.value !== '') { // on Enter key press
            const { videoId } = this.props;
            const { addComment } = this.props;

            addComment({ id: videoId, text: event.target.value })
        }
    }

    renderVideoComments() {
        const { videoId, videoComments } = this.props;
        const { addComment, addReply } = this.props;

        if (!videoComments.size) {
            return (
                <NoItems itemsName="comments"/>
            )
        }

        return (
            <div className="comments-container">
                { videoComments.map(comment =>
                    <VideoPopupComment
                        comment={comment}
                        videoId={videoId}
                        addComment={addComment}
                        addReply={addReply}
                    />
                )}
            </div>
        )
    }

    render() {
        const { videoEmbedUrl } = this.props;

        return (
            <section className="video-popup-item">
                <div className="video-popup-top-part">
                    <YoutubeVideo
                        videoUrl={videoEmbedUrl}
                    />
                    <VideoPopupVideoActions />
                    <InputField
                        type="text"
                        containerClassName="video-comment"
                        className="video-comment-input"
                        placeholder="comment..."
                        onKeyUp={this.onCommentInputKeyUp}
                    />
                </div>
                { this.renderVideoComments() }
            </section>
        );
    }
}

VideoPopupItem.defaultProps = {
    videoUrl: ''
};

VideoPopupItem.propTypes = {
    videoUrl: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired,
    addReply: PropTypes.func.isRequired,
    setCommentText: PropTypes.func.isRequired,
    setReplyText: PropTypes.func.isRequired,
};
