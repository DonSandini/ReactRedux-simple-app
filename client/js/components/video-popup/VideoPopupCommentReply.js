import React, { Component, PropTypes } from 'react';
import { Avatar, Button, InputField } from '../'

export default class VideoPopupProfileReply extends Component {
    render() {
        return (
            <div className="reply-section">
                <div className="reply-message">
                    <div className="reply-profile">
                        <Avatar  avatarId={1}/>
                        <div className="reply-meta">
                            <div className="reply-author">Pesho</div>
                            <div className="reply-date">March 7, 2013 at 7:30 pm</div>
                        </div>
                    </div>
                    <div className="reply-message-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis deleniti dolorem
                        magnam modi perferendis praesentium recusandae suscipit vitae voluptates.
                    </div>
                </div>
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
        );
    }
}

VideoPopupProfileReply.defaultProps = {};

VideoPopupProfileReply.propTypes = {};
