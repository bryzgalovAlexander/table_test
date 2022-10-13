import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {tableSlice} from "./toolkitReducer";
import {rootSaga} from "./saga";
import createSagaMiddleware from 'redux-saga'

const rootReducer = combineReducers(tableSlice);
const sagaMiddleware = createSagaMiddleware();

export const setupStore = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
    });

sagaMiddleware.run(rootSaga)