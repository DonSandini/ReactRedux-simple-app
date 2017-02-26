import React, { Component, PropTypes } from 'react';
import { Avatar, Button, InputField } from '../'

export default class VideoPopupCommentReplyActions extends Component {
    render() {
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
                    onChange={this.onReplyTextChange}
                />
            </div>
        );
    }
}

VideoPopupCommentReplyActions.defaultProps = {};

VideoPopupCommentReplyActions.propTypes = {};
