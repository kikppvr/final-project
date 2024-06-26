import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../SuccessModal/SuccessModal.scss";

const SuccessModal = ({ onClose, children }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const loadBootstrapModal = async () => {
            const modalElement = modalRef.current;
            if (modalElement) {
                console.log('Modal element found:', modalElement);
                if (window.bootstrap && window.bootstrap.Modal) {
                    const bootstrapModal = new window.bootstrap.Modal(modalElement);
                    bootstrapModal.show();

                    const handleHide = () => {
                        bootstrapModal.hide();
                        onClose();
                    };

                    modalElement.addEventListener('hidden.bs.modal', handleHide);

                    return () => {
                        modalElement.removeEventListener('hidden.bs.modal', handleHide);
                    };
                } else {
                    console.error('Bootstrap Modal is not available in window.bootstrap');
                }
            }
        };

        loadBootstrapModal();
    }, [onClose]);

    return (
        <div className="modal modal-success fade" tabIndex="-1" ref={modalRef}>
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content shadow">
                    <div className="modal-body">
                        <i className="fa-solid fa-check"></i>
                        <h5 className="modal-title">{children}</h5>
                        <button type="button" className="btn btn-click-close" data-bs-dismiss="modal" onClick={onClose}>close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
