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

export function goToPopupId(popupId) {
    return push({
        pathname: `/popup/${popupId}`
    })
}