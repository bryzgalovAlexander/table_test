import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../redux/toolkitReducer";
import {currentPageSelector} from "../redux/saga/selectors";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Pagination = () => {

    const currentPage = useSelector(currentPageSelector);
    const dispatch = useDispatch();

    return (
            <div className={'button-container'}>
                {pages.map((page, index) =>
                    <button
                        key={index}
                        className={currentPage === page ? 'current-button' : 'button'}
                        onClick={() => dispatch(setCurrentPage(page))}
                >
                        {page}
                </button>
                )}
            </div>
    );
};