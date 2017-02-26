import { CONSUME_YOUTUBE_VIDEO, SET_COMMENT_TEXT, SET_REPLY_TEXT, SET_POPUP_VIDEO } from '../constants/video-popup';

export function setCommentText({ commentText }) {
    return {
        type: SET_COMMENT_TEXT,
        payload: { commentText }
    };
}

export function setReplyText({ replyText }) {
    return {
        type: SET_REPLY_TEXT,
        payload: { replyText }
    };
}

export function consumeYoutubeVideo({ videoUrl }) {
    return {
        type: CONSUME_YOUTUBE_VIDEO,
        payload: { videoUrl }
    };
}

export function setPopupVideo({ videoData }) {
    return {
        type: SET_POPUP_VIDEO,
        payload: { videoData }
    };
}

