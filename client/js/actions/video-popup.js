import { SET_COMMENT_TEXT } from '../constants/video-popup';

export function setCommentText({ commentText }) {
    return {
        type: SET_COMMENT_TEXT,
        payload: { commentText }
    };
}