import {
    START_LOADING,
    STOP_LOADING
} from '../constants/loaders';
import Immutable from 'immutable';

const initialState = Immutable.Map();

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case START_LOADING:
            state = state.set(action.payload.name, true);
            break;
        case STOP_LOADING:
            state = state.delete(action.payload.name);
            break;
        default:
            break;
    }

    return state;
}
