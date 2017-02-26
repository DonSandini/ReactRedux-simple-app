import React, { Component, PropTypes } from 'react';
import { Button, Icon } from '../'

export default class VideoPopupCommentActions extends Component {
    render() {
        return (
            <div className="comment-author-actions">
                <Button className="like" text="Like">
                    <Icon iconId="like"/>
                </Button>
                <Button className="share" text="Share">
                    <Icon iconId="share"/>
                </Button>
                <Button className="comment" text="Comment">
                    <Icon iconId="comment"/>
                </Button>
                <Button className="report" text="report">
                    <Icon iconId="report"/>
                </Button>
            </div>
        );
    }
}

VideoPopupCommentActions.defaultProps = {};

VideoPopupCommentActions.propTypes = {};
