import { push } from 'redux-router';

export function goToUserId(username) {
    return push({
        pathname: `/user-info/${username}`
    })
}