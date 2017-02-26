import React, { Component, PropTypes } from 'react';
import { InputField, NoItems, YoutubeVideo } from '../'
import {
    VideoPopupVideoActions,
    VideoPopupCommentMessage,
    VideoPopupCommentReply,
    VideoPopupCommentReplyActions
} from './'

export default class VideoPopupItem extends Component {
    constructor() {
        super();

        this.onCommentInputChange = this.onCommentInputChange.bind(this);
        this.onReplyTextChange = this.onReplyTextChange.bind(this);
        this.onCommentInputKeyUp = this.onCommentInputKeyUp.bind(this);
    }

    onCommentInputChange(event) {
        const { setCommentText } = this.props;

        setCommentText({ commentText: event.target.value });
    }

    onCommentInputKeyUp(event) {
        if (event.keyCode === 13 && event.target.value !== '') { // on Enter key press
            const { videoId } = this.props;
            const { addComment } = this.props;

            addComment({ id: videoId, text: event.target.value })
        }
    }

    onReplyTextChange(event) {
        const { setReplyText } = this.props;

        setReplyText({ replyText: event.target.value });
    }

    renderCommentReplies(replies) {
        if (!replies.size) {
            return <NoItems itemsName="replies"/>;
        }

        return (
            <div className="replies-container">
                { replies.map(reply =>
                    <VideoPopupCommentReply
                        replyId={reply.get('id')}
                        replyMessage={reply.get('text')}
                        replyAuthor={reply.get('author')}
                        replyDate={reply.get('data')}
                    />
                )}
                <VideoPopupCommentReplyActions />
            </div>
        );
    }

    renderVideoComments() {
        const { videoComments } = this.props;

        if (!videoComments.size) {
            return (
                <NoItems itemsName="comments" />
            )
        }

        return (
            <div className="comment-section">
                { videoComments.map(comment =>
                    <div>
                        <VideoPopupCommentMessage
                            commentAuthor={videoComments.getIn([comment, 'author' ])}
                            commentDate={videoComments.getIn([comment, 'date' ])}
                            commentMessage={videoComments.getIn([comment, 'text' ])}

                        />
                        { this.renderCommentReplies(comment.get('replies')) }
                    </div>
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
                        onChange={this.onCommentInputChange}
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
    setCommentText: PropTypes.func.isRequired,
    setReplyText: PropTypes.func.isRequired,
};
