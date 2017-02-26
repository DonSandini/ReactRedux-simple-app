import { YOUTUBE_URL, YOUTUBE_EMBED_PATH, YOUTUBE_URL_REGEX } from '../constants/video-popup';

export const isValidYoutubeUrl = url => {
    const regex = new RegExp(YOUTUBE_URL_REGEX);

    return regex.test(url);
};

export const getYoutubeVideoUrl = videoId => {
    if (url.indexOf('embed') > 0) {
        return url;
    }

    if (url.indexOf('watch') > 0) {
        const videoId = url.split('=').pop();

        return `${YOUTUBE_URL}${YOUTUBE_EMBED_PATH}${videoId}`
    }
};

export const getYoutubeVideoId = url => {
    if (url.indexOf('watch') > 0) {
        return videoId = url.split('v=').pop();
    } else {
        return '';
    }
};
