import {
    SET_COMMENT_TEXT,
    RESET_COMMENT_INPUT
} from '../constants/video-popup';
import Immutable from 'immutable';

const initialState = Immutable.Map({
    commentText: ''
});

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case SET_COMMENT_TEXT:
            state = state.set('commentText', action.payload.commentText);
            break;
        case RESET_COMMENT_INPUT:
            state = state.set('commentText', initialState.get('commentText'));
            break;
        default:
            break;
    }

    return state;
}
