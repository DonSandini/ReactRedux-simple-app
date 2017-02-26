import React, { Component, PropTypes } from 'react';
import { VideoPopupCommentActions } from './'

export default class VideoPopupProfileInfo extends Component {
    render() {
        return (
            <div className="profile-info">
                <div className="profile-meta">
                    <Avatar avatarId={1}/>
                    <div className="profile-meta-inner">
                        <div className="comment-author">
                            Stoyan Daskaloff
                        </div>
                        <div className="comment-date">
                            March 7, 2013 at 7:30 pm
                        </div>
                    </div>
                </div>
                <div className="author-description">
                    Sed quis diam egestas, egestas mauris in, dapibus eros. Duis nisi nulla, accumsan eu libero sit
                    amet, faucibus ornare nisi. Phasellus cursus dolor ante, at placerat est tincidunt vel. In
                    ullamcorper pulvinar est id congue. Pellentesque scelerisque ante vel justo varius, non aliquet est
                    eleifend. Aliquam erat volutpat. Curabitur blandit, lorem eget tincidunt scelerisque, mauris felis
                    pellentesque dolor, et adipiscing nisi ipsum eget est.
                </div>
                <VideoPopupCommentActions />
            </div>
        );
    }
}

VideoPopupProfileInfo.defaultProps = {};

VideoPopupProfileInfo.propTypes = {};
