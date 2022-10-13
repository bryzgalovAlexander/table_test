import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../redux/toolkitReducer";
import {currentPageSelector} from "../redux/saga/selectors";

export const Pagination = () => {

    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const currentPage = useSelector(currentPageSelector);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={'button-container'}>
                {pages.map((page, index) => <button
                    key={index}
                    className={currentPage === page ? 'current-button' : 'button'}
                    onClick={() => dispatch(setCurrentPage(page))}
                >{page}
                </button>)}
            </div>
        </div>
    );
};