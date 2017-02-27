import React, { Component, PropTypes } from 'react';
import { Avatar } from '../'

export default class VideoPopupProfileReply extends Component {
    render() {
        const { replyMessage, replyAuthor, replyDate } = this.props;

        return (
            <div className="reply-message">
                <div className="reply-profile">
                    <Avatar avatarId={1}/>
                    <div className="reply-meta">
                        <div className="reply-author">{replyAuthor}</div>
                        <div className="reply-date">{replyDate}</div>
                    </div>
                </div>
                <div className="reply-message-content">
                    {replyMessage}
                </div>
            </div>
        );
    }
}

VideoPopupProfileReply.defaultProps = {
    replyMessage: '',
    replyAuthor: '',
    replyDate: 0
};

VideoPopupProfileReply.propTypes = {
    replyMessage: PropTypes.string.isRequired,
    replyAuthor: PropTypes.string.isRequired,
    replyDate: PropTypes.number.isRequired
};
