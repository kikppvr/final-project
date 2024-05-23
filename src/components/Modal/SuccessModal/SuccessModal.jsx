import React, { useEffect } from "react";
import "../SuccessModal/SuccessModal.scss";

const SuccessModal = ({ onClose }) => {
    return (
    
        <div className="modal">
            {/* <div className="modal-backdrop"></div> */}
            <div className="modal-success open">
                <div className="modal-header">Success</div>
                <div className="modal-body">Registration successful!</div>
                <div className="modal-footer">
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
     
    );
};

export default SuccessModal;
