import { call } from 'redux-saga/effects';
import { usersSaga } from './users';

export default function* rootSaga() {
    yield [
        call(usersSaga)
    ];
}
