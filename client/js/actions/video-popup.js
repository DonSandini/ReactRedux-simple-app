import { SET_COMMENT_TEXT, SET_REPLY_TEXT, SET_VIDEO_ID } from '../constants/video-popup';

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

export function setVideoId({ videoId }) {
    return {
        type: SET_VIDEO_ID,
        payload: { videoId }
    };
}

