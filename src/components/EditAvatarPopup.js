import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    return (
        <PopupWithForm title="Change profile picture" name="edit-avatar" btnText="Yes" isOpen={props.isOpen} loadingBtnText="Saving..." onClose={props.onClose}>
            <input type="text" name="avatar" className="popup__input popup__input_type_link" placeholder="Image link"
                id="avatar-input" required />
            <span className="popup__error avatar-input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;