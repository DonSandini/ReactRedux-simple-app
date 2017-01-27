import { SET_SEARCH_TEXT } from '../constants/search';

export function setSearchText({ searchText }) {
    return {
        type: SET_SEARCH_TEXT,
        payload: { searchText }

    };
}