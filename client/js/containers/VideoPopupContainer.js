import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'redux-router';
import { Popup } from '../components';
import { VideoPopupInput, VideoPopupItem } from '../components/video-popup';
import { Icon } from '../components';
import {
    addComment,
    addReply,
    setActiveComment,
    setCommentText,
    setReplyText,
    consumeYoutubeVideo
} from '../actions/video-popup';

class VideoPopupContainer extends Component {
    render() {
        const { shouldShowVideoPopup, activeCommentId, currentVideoId, videoIds, videosById } = this.props;
        const { addComment, addReply, goBack, setActiveComment, setCommentText, setReplyText, consumeYoutubeVideo } = this.props;

        return (
            <Popup
                className="video-popup-container"
                onBackdropClick={goBack}
            >
                <Icon iconId="close" onClick={goBack}/>
                { shouldShowVideoPopup && !!videoIds.size ?
                    <VideoPopupItem
                        activeCommentId={activeCommentId}
                        videoId={currentVideoId}
                        videoEmbedUrl={videosById.getIn([currentVideoId, 'embedUrl'])}
                        videoComments={videosById.getIn([currentVideoId, 'comments'])}
                        addComment={addComment}
                        addReply={addReply}
                        setActiveComment={setActiveComment}
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
    addReply: () => {},
    goBack: () => {},
    setActiveComment: () => {},
    setCommentText: () => {},
    setReplyText: () => {},
    consumeYoutubeVideo: () => {}
};

VideoPopupContainer.propTypes = {
    shouldShowVideoPopup: PropTypes.bool.isRequired,
    activeCommentId: PropTypes.string.isRequired,
    currentVideoId: PropTypes.string.isRequired,
    videoIds: PropTypes.object.isRequired,
    videosById: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired,
    addReply: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    setActiveComment: PropTypes.func.isRequired,
    setCommentText: PropTypes.func.isRequired,
    setReplyText: PropTypes.func.isRequired,
    consumeYoutubeVideo: PropTypes.func.isRequired
};

export default connect(
    //	Map state to props
    state => ({
        activeCommentId: state.videoPopup.get('activeCommentId'),
        shouldShowVideoPopup: state.videoPopup.get('shouldShowVideoPopup'),
        currentVideoId: state.videoPopup.get('currentVideoId'),
        videoIds: state.videoPopup.get('videoIds'),
        videosById: state.videoPopup.get('videosById')
    }),
    //	Bind actions to props
    dispatch => bindActionCreators({
        addComment,
        addReply,
        goBack,
        setActiveComment,
        setCommentText,
        setReplyText,
        consumeYoutubeVideo
    }, dispatch)
)(VideoPopupContainer);
