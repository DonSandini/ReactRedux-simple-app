import { push } from 'redux-router';

export function goToUserId(username) {
    return push({
        pathname: `/user-info/${username}`
    })
}

export function goHome() {
    return push({
        pathname: `/`
    })
}