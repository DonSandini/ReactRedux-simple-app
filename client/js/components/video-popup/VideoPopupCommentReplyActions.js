import React, { Component, PropTypes } from 'react';
import { Avatar, Button, InputField } from '../'

export default class VideoPopupCommentReplyActions extends Component {
    render() {
        const { onReplySubmit } = this.props;

        return (
            <div className="reply-actions-container">
                <div className="reply-actions">
                    <Button className="active" text="comment"/>
                    <Button text="photo"/>
                    <Button text="feedback"/>
                </div>
                <InputField
                    type="text"
                    className="video-comment-reply"
                    placeholder="reply..."
                    onKeyUp={onReplySubmit}
                />
            </div>
        );
    }
}

VideoPopupCommentReplyActions.defaultProps = {
    onReplySubmit: () => {}
};

VideoPopupCommentReplyActions.propTypes = {
    onReplySubmit: PropTypes.func.isRequired
};
