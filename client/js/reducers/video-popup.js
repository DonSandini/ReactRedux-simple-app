import {
    ADD_COMMENT,
    ADD_REPLY,
    SET_ACTIVE_COMMENT,
    SET_COMMENT_TEXT,
    SET_REPLY_TEXT,
    SET_POPUP_VIDEO,
    RESET_VIDEO_POPUP
} from '../constants/video-popup';
import Immutable from 'immutable';

const initialReplyState = Immutable.Map({
    commentId: '',
    id: '',
    text: '',
    author: '1',
    date: '',
    isReply: true
});

const initialCommentState = Immutable.Map({
    id: '',
    text: '',
    author: 1,
    date: '',
    replies: Immutable.Map()
});

const initialVideoState = Immutable.Map({
    id: '',
    url: '',
    embedUrl: '',
    comments: Immutable.Map()
});

const initialState = Immutable.Map({
    activeCommentId: '',
    commentText: '',
    replyText: '',
    shouldShowVideoPopup: false,
    currentVideoId: '',
    videoIds: Immutable.List(),
    videosById: Immutable.Map({})
});

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case ADD_COMMENT: {
            const createDate = +new Date();

            state = state.setIn(
                [ 'videosById', action.payload.id, 'comments', createDate ],
                initialCommentState.merge({
                    id: createDate,
                    text: action.payload.text,
                    date: createDate
                })
            );
            state = state.set('commentText', initialState.get('commentText'));
            break;
        }
        case ADD_REPLY: {
            const createDate = +new Date();

            state = state.setIn(
                [ 'videosById', action.payload.videoId, 'comments', action.payload.commentId, 'replies', createDate ],
                initialReplyState.merge({
                    commentId: action.payload.videoId,
                    id: createDate,
                    text: action.payload.text,
                    date: createDate
                })
            );
            state = state.set('replyText', initialState.get('replyText'));
            break;
        }
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
        case SET_ACTIVE_COMMENT:
            state = state.set('activeCommentId', action.payload.commentId);
            break;
        case RESET_VIDEO_POPUP:
            state = initialState;
            break;
        default:
            break;
    }

    return state;
}
