import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'redux-router';
import { VideoPopupNavigation } from '../components/video-popup';
import { Popup } from '../components';
import { VideoPopupItem } from '../components/video-popup';

class VideoPopupContainer extends Component {

    renderNavigation() {
        return(
            <VideoPopupNavigation />
        )
    }

    render() {
        const { popupId, goBack } = this.props;

        return(
            <div className="video-popup-container">
                { this.renderNavigation() }

                { popupId ?
                    <Popup onBackdropClick={goBack}>
                        <VideoPopupItem popupId={popupId} />
                    </Popup>
                    : null
                }
            </div>
        )
    }
}

VideoPopupContainer.displayName = 'VideoPopupContainer';

VideoPopupContainer.propTypes = {
    goBack: PropTypes.func.isRequired
};

export default connect(
    //	Map state to props
    state => ({
        popupId: state.router.params.popupId
    }),
    //	Bind actions to props
    dispatch => bindActionCreators({
        goBack
    }, dispatch)
)(VideoPopupContainer);
