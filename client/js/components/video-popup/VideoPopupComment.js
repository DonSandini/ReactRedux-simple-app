import React, { Component, PropTypes } from 'react';
import {
    VideoPopupCommentMessage,
    VideoPopupCommentReply,
    VideoPopupCommentReplyActions
} from './'
import { formatDate } from '../../utils/date';

export default class VideoPopupComment extends Component {
    constructor() {
        super();

        this.onReplyInputKeyUp = this.onReplyInputKeyUp.bind(this);
    }

    onReplyInputKeyUp(event) {
        if (event.keyCode === 13 && event.target.value !== '') { // on Enter key press
            const { videoId, comment } = this.props;
            const { addReply } = this.props;

            addReply({ videoId, commentId: comment.get('id'), text: event.target.value })
        }
    }

    renderCommentReplies() {
        const { comment } = this.props;
        const replies = comment.get('replies');

        if (!replies.size) {
            return (
                <div className="reply-section">
                    <VideoPopupCommentReplyActions
                        onReplySubmit={this.onReplyInputKeyUp}
                    />
                </div>
            )
        }

        return (
            <div className="reply-section">
                { replies.map(reply =>
                    <VideoPopupCommentReply
                        key={reply.get('id')}
                        replyId={reply.get('id')}
                        replyMessage={reply.get('text')}
                        replyAuthor={reply.get('author')}
                        replyDate={formatDate(reply.get('date'))}
                    />
                )}
                <VideoPopupCommentReplyActions
                    onReplySubmit={this.onReplyInputKeyUp}
                />
            </div>
        );
    }

    render() {
        const { comment } = this.props;

        return (
            <div
                className="comment-section"
                key={comment.get('id')}>
                <VideoPopupCommentMessage
                    commentAuthor={comment.get('author')}
                    commentDate={formatDate(comment.get('date'))}
                    commentMessage={comment.get('text')}
                />
                <div className="reply-section">

                </div>
                { this.renderCommentReplies() }
            </div>
        );
    }
}

VideoPopupComment.defaultProps = {
    addReply: () => {
    }
};

VideoPopupComment.propTypes = {
    comment: PropTypes.any.isRequired,
    addReply: PropTypes.func.isRequired
};
