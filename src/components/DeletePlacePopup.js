import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePlacePopup(props) {
    return (
        <PopupWithForm title="Are you sure?" name="confirm-delete" btnText="Yes" isOpen={props.isOpen} onClose={props.onClose} />
    )
}

export default DeletePlacePopup;