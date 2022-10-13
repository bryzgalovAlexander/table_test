
export const isLoadingSelector = (store) => store.reducer.isLoading;
export const dataSelector = (store) => store.reducer.data;
export const currentPageSelector = (store) => store.reducer.currentPage;
export const perPageSelector = (store) => store.reducer.perPage;
export const isSortedSelector = (store) => store.reducer.isSorted;
export const isSortedByTitleSelector = (store) => store.reducer.isSortedByTitle;
export const errorSelector = (store) => store.reducer.error
export const isActiveModalSelector = (store) => store.reducer.isActiveModal
export const modalDataSelector = (store) => store.reducer.modalData