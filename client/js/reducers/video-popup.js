import {
    SET_COMMENT_TEXT,
    SET_REPLY_TEXT,
    SET_POPUP_VIDEO,
    RESET_VIDEO_POPUP
} from '../constants/video-popup';
import Immutable from 'immutable';

const initialReplyState = Immutable.Map({
    id: '',
    text: '',
    author: '',
    date: ''
});

const initialVideoState = Immutable.Map({
    id: '',
    url: '',
    embedUrl: '',
    comments: Immutable.Map()
});

const initialState = Immutable.Map({
    commentText: '',
    replyText: '',
    shouldShowVideoPopup: false,
    currentVideoId: '',
    videoIds: Immutable.List(),
    videosById: Immutable.Map({})
});

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case SET_COMMENT_TEXT:
            state = state.set('commentText', action.payload.commentText);
            break;
        case SET_POPUP_VIDEO:
            const { id, url, embedUrl } = action.payload.videoData;

            state = state.set('shouldShowVideoPopup', true);
            state = state.set('currentVideoId', id);
            if (!state.get('videoIds').includes(id)) {
                state = state.update('videoIds', videoIds => videoIds.push(id));
                state = state.setIn(
                    [ 'videosById', id ],
                    initialVideoState.merge({
                        id,
                        url,
                        embedUrl
                    })
                );
            }
            break;
        case RESET_VIDEO_POPUP:
            state = initialState;
            break;
        default:
            break;
    }

    return state;
}
