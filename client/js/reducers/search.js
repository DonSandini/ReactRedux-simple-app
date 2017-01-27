import {
    SET_SEARCH_TEXT,
    RESET_SEARCH_INPUT
} from '../constants/search';
import Immutable from 'immutable';

const initialState = Immutable.Map({
    searchText: ''
});

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            state = state.set('searchText', action.payload.searchText);
            break;
        case RESET_SEARCH_INPUT:
            state = state.set('searchText', initialState.get('searchText'));
            break;
        default:
            break;
    }

    return state;
}
