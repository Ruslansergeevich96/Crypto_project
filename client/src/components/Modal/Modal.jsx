import React from "react";


const Modal = ({ open, onClose}) => {
    if(!open) return null
    return (
        <div className="overlay">
            <div className="modalContainer">
                <div className="modalRight">
                    <p onClick={onClose} className="closeButton">X</p>
                    <div className="content">
                        <h1>Test text</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;