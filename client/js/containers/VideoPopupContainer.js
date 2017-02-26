import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'redux-router';
import { Popup } from '../components';
import { VideoPopupInput, VideoPopupItem } from '../components/video-popup';
import { Icon } from '../components';
import {
    addComment,
    setCommentText,
    setReplyText,
    consumeYoutubeVideo
} from '../actions/video-popup';

class VideoPopupContainer extends Component {
    render() {
        const { shouldShowVideoPopup, currentVideoId, videoIds, videosById } = this.props;
        const { addComment, goBack, setCommentText, setReplyText, consumeYoutubeVideo } = this.props;

        return (
            <Popup
                className="video-popup-container"
                onBackdropClick={goBack}
            >
                <Icon iconId="close" onClick={goBack}/>
                { shouldShowVideoPopup && !!videoIds.size ?
                    <VideoPopupItem
                        videoId={currentVideoId}
                        videoEmbedUrl={videosById.getIn([currentVideoId, 'embedUrl'])}
                        videoComments={videosById.getIn([currentVideoId, 'comments'])}
                        addComment={addComment}
                        setCommentText={setCommentText}
                        setReplyText={setReplyText}
                    />
                    : <VideoPopupInput consumeYoutubeVideo={consumeYoutubeVideo}/>
                }
            </Popup>
        );
    }
}

VideoPopupContainer.displayName = 'VideoPopupContainer';

VideoPopupContainer.defaultProps = {
    shouldShowVideoPopup: false,
    addComment: () => {},
    goBack: () => {},
    setCommentText: () => {},
    setReplyText: () => {},
    consumeYoutubeVideo: () => {}
};

VideoPopupContainer.propTypes = {
    shouldShowVideoPopup: PropTypes.bool.isRequired,
    currentVideoId: PropTypes.string.isRequired,
    videoIds: PropTypes.object.isRequired,
    videosById: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    setCommentText: PropTypes.func.isRequired,
    setReplyText: PropTypes.func.isRequired,
    consumeYoutubeVideo: PropTypes.func.isRequired
};

export default connect(
    //	Map state to props
    state => ({
        shouldShowVideoPopup: state.videoPopup.get('shouldShowVideoPopup'),
        currentVideoId: state.videoPopup.get('currentVideoId'),
        videoIds: state.videoPopup.get('videoIds'),
        videosById: state.videoPopup.get('videosById')
    }),
    //	Bind actions to props
    dispatch => bindActionCreators({
        addComment,
        goBack,
        setCommentText,
        setReplyText,
        consumeYoutubeVideo
    }, dispatch)
)(VideoPopupContainer);
