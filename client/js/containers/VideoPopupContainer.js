import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'redux-router';
import { Popup } from '../components';
import { VideoPopupInput, VideoPopupItem } from '../components/video-popup';
import { Icon } from '../components';
import { setCommentText, setReplyText, setVideoId } from '../actions/video-popup';

class VideoPopupContainer extends Component {
    render() {
        const { videoId } = this.props;
        const { goBack, setCommentText, setReplyText, setVideoId } = this.props;

        return (
            <Popup
                className="video-popup-container"
                onBackdropClick={goBack}
            >
                <Icon iconId="close" onClick={goBack}/>
                { !videoId ?
                    <VideoPopupItem
                        videoId={videoId}
                        setCommentText={setCommentText}
                        setReplyText={setReplyText}
                    />
                    : <VideoPopupInput setVideoId={setVideoId}/>
                }
            </Popup>
        );
    }
}

VideoPopupContainer.displayName = 'VideoPopupContainer';

VideoPopupContainer.defaultProps = {
    videoId: '',
    goBack: () => {},
    setCommentText: () => {},
    setReplyText: () => {},
    setVideoId: () => {}
};

VideoPopupContainer.propTypes = {
    videoId: PropTypes.string.isRequired,
    goBack: PropTypes.func.isRequired,
    setCommentText: PropTypes.func.isRequired,
    setReplyText: PropTypes.func.isRequired,
    setVideoId: PropTypes.func.isRequired
};

export default connect(
    //	Map state to props
    state => ({
        videoId: state.router.params.popupId
    }),
    //	Bind actions to props
    dispatch => bindActionCreators({
        goBack,
        setCommentText,
        setReplyText,
        setVideoId
    }, dispatch)
)(VideoPopupContainer);
