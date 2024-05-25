import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../LoadingModal/LoadingModal.scss'

const LoadingModal = () => {
    const modalRef = useRef(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            console.log('Modal element found:', modalElement);
            if (window.bootstrap && window.bootstrap.Modal) {
        
                // Show the modal immediately after the component is mounted
                const bootstrapModal = new window.bootstrap.Modal(modalElement, {
                    backdrop: 'static', // Prevent closing by clicking outside
                    keyboard: false // Prevent closing by pressing the escape key
                });
                bootstrapModal.show();

                // Clean up function
                return () => {
                    bootstrapModal.hide();
                };
            } else{
                console.error('Bootstrap Modal is not available in window.bootstrap');
            }
        }
    });

    return (
        <div className="modal modal-loading fade" tabIndex="-1" ref={modalRef} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content shadow">
                    <div className="modal-body">
                        <h5 className="modal-title">Loading ...</h5>
                    </div>
                </div>
            </div>
        </div>
            
    );
};

export default LoadingModal;
