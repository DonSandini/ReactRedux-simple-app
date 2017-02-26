import React, { Component, PropTypes } from 'react';
import { Avatar } from '../';
import { VideoPopupCommentActions } from './';

export default class VideoPopupProfileInfo extends Component {
    render() {
        const { commentAuthor, commentDate, commentMessage } = this.props;

        return (
            <div className="comment-item">
                <div className="comment-profile-meta">
                    <Avatar avatarId={1}/>
                    <div className="comment-profile-meta-inner">
                        <div className="comment-author">
                            { commentAuthor }
                        </div>
                        <div className="comment-date">
                            { commentDate }
                        </div>
                    </div>
                </div>
                <div className="comment-message">
                    { commentMessage }
                </div>
                <VideoPopupCommentActions />
            </div>
        );
    }
}

VideoPopupProfileInfo.defaultProps = {
    commentAuthor: '',
    commentDate: '',
    commentMessage: ''
};

VideoPopupProfileInfo.propTypes = {
    commentAuthor: PropTypes.string.isRequired,
    commentDate: PropTypes.string.isRequired,
    commentMessage: PropTypes.string.isRequired
};
