import React, {useState} from "react";
import Modal from './Modal'

function ModalApp () {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <button onClick={() => setOpenModal(true)}> Modal </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}/>
        </div>
    )
}
export default ModalApp;