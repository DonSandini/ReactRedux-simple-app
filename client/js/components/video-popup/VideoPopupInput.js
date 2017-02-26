import React, { Component, PropTypes } from 'react';
import { InputField } from '../'
import { isValidYoutubeUrl } from '../../utils/video';

export default class VideoPopupItem extends Component {
    constructor() {
        super();

        this.onVideoInputChange = this.onVideoInputChange.bind(this);
    }

    onVideoInputChange(event) {
        const { consumeYoutubeVideo } = this.props;
        const inputText = event.target.value;
        
        if (isValidYoutubeUrl(inputText)) {
            consumeYoutubeVideo({ videoUrl: inputText })
        }
    }

    render() {
        return (
            <section className="video-popup-input-container">
                <InputField
                    type="text"
                    className="search-video"
                    placeholder="Paste youtube video ..."
                    onChange={this.onVideoInputChange}
                />
            </section>
        );
    }
}

VideoPopupItem.defaultProps = {
    consumeYoutubeVideo: () => {}
};

VideoPopupItem.propTypes = {
    consumeYoutubeVideo: PropTypes.func.isRequired
};
