import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../SuccessModal/SuccessModal.scss";

const SuccessModal = ({ onClose }) => {
    const modalRef = useRef(null);

    
    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            // แสดงโมดอลทันทีหลังจากที่คอมโพเนนต์ถูกเมาท์
            const bootstrapModal = new window.bootstrap.Modal(modalElement);
            bootstrapModal.show();

            // ฟังชั่นสำหรับจัดการการปิดโมดอล
            const handleHide = () => {
                bootstrapModal.hide();
                onClose();
            };

            modalElement.addEventListener('hidden.bs.modal', handleHide);

            // ล้างการตั้งค่าเมื่อคอมโพเนนต์ถูกยกเลิก
            return () => {
                modalElement.removeEventListener('hidden.bs.modal', handleHide);
            };
        }
    }, [onClose]);

    return (
        <div className="modal modal-success fade" tabIndex="-1" ref={modalRef}>
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content shadow">
                    <div className="modal-body">
                        <i className="fa-solid fa-check"></i>
                        <h5 className="modal-title">Register successful!</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-click-close" data-bs-dismiss="modal" onClick={onClose}>close</button>
                    </div>
                </div>
            </div>
        </div>
            
    );
};

export default SuccessModal;
