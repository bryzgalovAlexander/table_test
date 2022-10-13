import {takeEvery} from 'redux-saga/effects'
import {sagaAction} from "./action";
import {fetchDataSaga} from "./saga";

export function* watchSaga() {
    yield takeEvery (sagaAction.FETCH_DATA, fetchDataSaga)
}

export function* rootSaga() {
    yield watchSaga();
}