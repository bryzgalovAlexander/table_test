export const sagaAction = {
    FETCH_DATA: 'FETCH_DATA',
    SET_CURRENT_DATA: 'SET_CURRENT_DATA'
}

export const fetchDataSagaAction = (payload) => ({
    type: sagaAction.FETCH_DATA,
    payload
})
