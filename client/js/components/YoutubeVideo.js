import React, { Component, PropTypes } from 'react';

export default class YoutubeVideo extends Component {
    render() {
        const { containerClassName, className, videoUrl } = this.props;

        return (
            <div className={`video-container ${containerClassName}`}>
                <iframe
                    className={`video ${className}`}
                    src={videoUrl}
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
    videoUrl: '',
};

YoutubeVideo.propTypes = {
    className: PropTypes.string.isRequired,
    containerClassName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
