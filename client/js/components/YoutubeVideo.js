import React, { Component, PropTypes } from 'react';
import { YOUTUBE_URL, YOUTUBE_EMBED_PATH } from '../constants/video-popup';

export default class YoutubeVideo extends Component {
    getVideoEmbedUrl() {
        const { url } = this.props;

        if (url.indexOf('embed') > 0) {
            return url;
        }

        if (url.indexOf('watch') > 0) {
            const videoId = url.split('=').pop();

            return `${YOUTUBE_URL}${YOUTUBE_EMBED_PATH}${videoId}`
        }
    }

    render() {
        const { containerClassName, className } = this.props;

        return (
            <div className={`video-container ${containerClassName}`}>
                <iframe
                    className={`video ${className}`}
                    src={this.getVideoEmbedUrl()}
                    frameBorder="0"
                    allowFullScreen="1"
                />
            </div>
        );
    }
}

YoutubeVideo.defaultProps = {
    className: '',
    containerClassName: '',
    url: '',
};

YoutubeVideo.propTypes = {
    className: PropTypes.string.isRequired,
    containerClassName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
