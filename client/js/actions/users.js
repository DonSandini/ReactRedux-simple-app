import { CONSUME_USER_INFO, GET_USERS, GET_USER_INFO, RESET_USER_INFO, USER_NOT_FOUND } from '../constants/users';

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

export function consumeUserInfo({ userInfo }) {
    return {
        type: CONSUME_USER_INFO,
        payload: { userInfo }
    }
}

export function userNotFound() {
    return {
        type: USER_NOT_FOUND,
    }
}

export function resetUserInfo() {
    return {
        type: RESET_USER_INFO
    }
}