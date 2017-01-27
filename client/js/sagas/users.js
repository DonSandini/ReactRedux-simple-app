import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_USER_INFO, GITHUB_USER_API } from '../constants/users';
import { startLoading, stopLoading } from '../actions/loaders';

const fetchFromAPI = ({ method, url, query }) =>
    fetch(url, {
        method
    })
        .then((response) => response)
        .catch((error) => error);

function* getUserInfoSuccess(response) {
    console.log(response)
}

function* getUserInfoError(error) {
    console.log(error)
}

function* getUserInfo({ payload }) {
    try {
        const { username } = payload;
        const requestUrl = `${GITHUB_USER_API}${username}`;
        yield put(startLoading({ name: 'users' }));

        const response = yield call(fetch, requestUrl);
        // TODO: handle api calls with saga
        yield put({ type: "THING_RECEIVED", response })
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