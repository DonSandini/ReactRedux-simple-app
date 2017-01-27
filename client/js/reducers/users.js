import {
    CONSUME_USER_INFO,
    RESET_USER_INFO
} from '../constants/users';
import Immutable from 'immutable';

const initialState = Immutable.Map();

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case CONSUME_USER_INFO:
            debugger;
            break;
        case RESET_USER_INFO:
            state = initialState;
            break;
        default:
            break;
    }

    return state;
}
