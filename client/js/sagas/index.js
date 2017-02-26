import { call } from 'redux-saga/effects';
import { usersSaga } from './users';
import { videoPopupSaga } from './video-popup';

export default function* rootSaga() {
    yield [
        call(usersSaga),
        call(videoPopupSaga)
    ];
}
