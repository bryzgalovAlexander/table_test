import { put } from 'redux-saga/effects'
import axios from "axios";
import { setData, setLoading, setError } from "../toolkitReducer";

export function* fetchDataSaga(action, currentPage,  perPage) {
    try {
        yield put(setLoading())
        const {data} = yield axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${action.payload}&_limit=${perPage}`)
        yield put(setData(data));
    } catch (e) {
        yield put(setError(e.message))
    }
}