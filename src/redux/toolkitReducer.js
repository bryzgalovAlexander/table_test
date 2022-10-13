import {createSlice} from "@reduxjs/toolkit";

const initialState = {

    testData: [
        {
            id: 1,
            name: 'one',
        },
        {
            id: 2,
            name: 'two',
        },
        {
            id: 3,
            name: 'three',
        },
    ],
    isActiveModal: false,
    modalData: [],
    error: '',
    isSortedByTitle: false,
    isSorted: false,
    isLoading: false,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
    data: [],
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        reorder(state, action){
            const [removed] = state.data.splice(action.payload.source.index, 1);
            state.data.splice(action.payload.destination.index, 0, removed);
        },
        setDragData(state){
            state.dragData = state.data
        },
        setLoading(state) {
            state.isLoading = true;
            state.data = []
        },
        setData(state, action) {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
            state.totalCount = action.payload.length
        },
        setError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setSortingToBig(state) {
            state.isSorted = !state.isSorted
            state.data.sort(( a, b ) => b.id - a.id )
        },
        setSortingToSmall(state) {
            state.isSorted = !state.isSorted
            state.data.sort(( a, b ) => a.id - b.id )
        },
        setSortingTitleToBig(state) {
            state.isSortedByTitle = !state.isSortedByTitle
            state.data.sort(function( a,b ) {
                if(a.title > b.title)
                return 1;
            else if (a.title < b.title) {
                    return -1;
            }
                return 0 })
        },
        setSortingTitleToSmall(state) {
            state.isSortedByTitle = !state.isSortedByTitle
            state.data.sort(function( a,b ) {
                if(a.title > b.title)
                    return -1;
                else if (a.title < b.title) {
                    return 1;
                }
                return 0 })
        },
        setModal(state) {
            state.isActiveModal = !state.isActiveModal
        },
        findTask(state, action) {
            state.modalData = state.data.find(item => item.id === action.payload )
            state.isActiveModal = !state.isActiveModal
        },
    }
})

export const {
    setDragData,
    setData,
    setCurrentPage,
    setLoading,
    setSortingToBig,
    setSortingToSmall,
    setSortingTitleToBig,
    setSortingTitleToSmall,
    setError,
    setModal,
    findTask,
    reorder,
    testReorder,
} = tableSlice.actions