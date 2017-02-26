import React, { Component, PropTypes } from 'react';
import { Button, Icon } from '../'

export default class VideoPopupVideoActions extends Component {
    render() {
        return (
            <div className="video-actions">
                <div className="left-actions">
                    <Button className="like" text="Like">
                        <Icon iconId="like"/>
                    </Button>
                    <Button className="share" text="Share">
                        <Icon iconId="share"/>
                    </Button>
                </div>
                <div className="right-actions">
                    <Button className="button-black edit" text="Edit"/>
                    <Button className="button-red delete" text="Delete"/>
                </div>
            </div>
        );
    }
}

VideoPopupVideoActions.defaultProps = {};

VideoPopupVideoActions.propTypes = {};
