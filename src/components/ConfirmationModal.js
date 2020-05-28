import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#app');
const ConfirmationModal = (props) => (
    <Modal
        isOpen = {props.removeClicked}
        contentLabel = "Remove Confirmation"
        onRequestClose = {props.changeRemoveState}
        closeTimeoutMS = {200}
        className = "modal"
    >
        <h1 className="modal__body">Do you really want to remove <span class="modal__body__item ">{props.expenseDescription}</span>?</h1>
        <div className="modal__button">
            <button className="button--option button--option--confirm" onClick={props.startRemoveExpense}>Remove</button>
            <button className="button--option button--option--cancel" onClick={props.changeRemoveState}>Cancel</button>
        </div>
        
    </Modal>
)

export default ConfirmationModal