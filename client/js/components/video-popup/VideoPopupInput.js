import React, { Component, PropTypes } from 'react';
import { InputField } from '../'

export default class VideoPopupItem extends Component {
    constructor() {
        super();

        this.onSearchVideo = this.onSearchVideo.bind(this);
    }

    onSearchVideo(event) {
        const { setVideoId } = this.props;

        debugger;
    }

    render() {
        return (
            <section className="video-popup-input-container">
                <InputField
                    type="text"
                    className="search-video"
                    placeholder="Paste youtube video ..."
                    onChange={this.onSearchVideo}
                />
            </section>
        );
    }
}

VideoPopupItem.defaultProps = {
    setVideoId: () => {
    }
};

VideoPopupItem.propTypes = {
    setVideoId: PropTypes.func.isRequired
};
