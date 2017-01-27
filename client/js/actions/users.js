import { GET_USERS, GET_USER_INFO, RESET_USER_INFO } from '../constants/users';

export function getUsers(payload) {
    return {
        type: GET_USERS,
        payload
    }
}

export function getUserInfo({ username }) {
    return {
        type: GET_USER_INFO,
        payload: { username }
    }
}

export function resetUserInfo() {
    return {
        type: RESET_USER_INFO
    }
}