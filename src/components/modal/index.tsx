import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GrClose } from "react-icons/gr";

import LanguagePicker from "../picker";
import LoginForm from "../../forms/login";
import { useProvider } from "../../helpers/contextHelper";

import "./style.css";

const Modal: React.FC<{}> = () => {
    const modalRef = useRef();
    const { state, dispatch } = useProvider();
    const { t } = useTranslation();

    useEffect(() => {
        if (state.isModalVisible && modalRef.current) {
            modalRef.current.focus();
        }
    }, [modalRef.current, state.isModalVisible]);

    const handleModalClose = () => {
        dispatch({
            type: "SET_MODAL_VISIBILITY",
            payload: false
        });
    };

    const stopClickPropagation = event => {
        event.stopPropagation();
    };

    const handleKeyDown = event => {
        if (event.keyCode === 27) {
            handleModalClose();
        }
    };

    return (
        state.isModalVisible && (
            <div ref={modalRef} className='modal-wrapper' onClick={handleModalClose} tabIndex={-1} onKeyDown={handleKeyDown}>
                <div className='modal-content' onClick={stopClickPropagation}>
                    <div className='modal-header'>
                        <span>{t("components.modal.title")}</span>
                        <div className='modal-controllers'>
                            <LanguagePicker />
                            <GrClose className='modal-closeButton' onClick={handleModalClose} />
                        </div>
                    </div>
                    <div className='modal-body'>
                        <LoginForm />
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;
