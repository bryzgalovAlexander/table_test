import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setModal} from "../redux/toolkitReducer";
import {isActiveModalSelector, modalDataSelector} from "../redux/saga/selectors";

const Modal = () => {

    const dispatch = useDispatch();
    const isActiveModal = useSelector(isActiveModalSelector)
    const modalData = useSelector(modalDataSelector)

    return (
                <div
                    className={ isActiveModal ? 'modal' : 'modal-inactive'}
                    onClick={(e) => e.stopPropagation()}>
                    <div
                        className={'modal-content'}
                        onClick={(e) => e.stopPropagation()}>
                        <button
                            className={"button-modal"}
                            onClick={() => dispatch(setModal())}>back</button>
                        <div className={'modal-text'}><h3>id:</h3> {modalData.id} </div>
                        <div className={'modal-text'}><h3>title:</h3> {modalData.title} </div>
                        <div className={'modal-text'}><h3>body:</h3> {modalData.body}</div>
                    </div>
                </div>
    );
};

export default Modal;
