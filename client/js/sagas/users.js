import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_USER_INFO, GITHUB_USER_API } from '../constants/users';
import { startLoading, stopLoading } from '../actions/loaders';
import { consumeUserInfo, resetUserInfo, userNotFound } from '../actions/users';
import { fetchFromApi } from '../utils/async';


function* getUserInfoSuccess(response) {
    if (response.message) {
        yield put(userNotFound())
    } else {
        yield put(consumeUserInfo({ userInfo: response }))
    }
}

function* getUserInfoError(error) {
    console.log(error); //handle fetch fail here
}

function* getUserInfo({ payload }) {
    try {
        yield put(startLoading({ name: 'users' }));
        yield put(resetUserInfo());
        const { username } = payload;
        const requestUrl = `${GITHUB_USER_API}${username}`;


        const response = yield fetchFromApi(requestUrl);

        if (response.success) {
            yield call(getUserInfoSuccess, response);
        } else {
            yield call(getUserInfoError, response);
        }
    } catch(e) {
        console.log(e)
    } finally {
        yield put(stopLoading({ name: 'users' }));
    }
}

export function* watchGetUsers() {
    yield takeLatest(GET_USER_INFO, getUserInfo);
}

export function* usersSaga() {
    yield [
        call(watchGetUsers),
    ];
}