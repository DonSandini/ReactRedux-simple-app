import {
    CONSUME_USER_INFO,
    RESET_USER_INFO,
    USER_NOT_FOUND
} from '../constants/users';
import Immutable from 'immutable';

const initialState = Immutable.Map({
    userInfo: Immutable.Map(),
    isUserInfoFound: false
});

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case CONSUME_USER_INFO:
            state = state.set('userInfo', Immutable.Map(action.payload.userInfo));
            break;
        case USER_NOT_FOUND:
            state = state.set('isUserInfoFound', true);
            break;
        case RESET_USER_INFO:
            state = initialState;
            break;
        default:
            break;
    }

    return state;
}
