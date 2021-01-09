import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => (
    <Modal
        isOpen={props.isModalOpen}
        onRequestClose={props.handleSelectedOption}
        contentLabel="Are you sure you want to remove the expense?"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Delete expense</h3>
        <div className="modal__subtitle">Are you sure you want to delete this expense?</div>
        <div className="button-group">
            <button className="button button--width" onClick={(e) => {props.handleSelectedOption('Cancel')}}>Cancel</button>
            <button className="button button--width" onClick={(e) => {props.handleSelectedOption('OK')}}>OK</button>
        </div>
    </Modal>
);


export default ConfirmationModal;