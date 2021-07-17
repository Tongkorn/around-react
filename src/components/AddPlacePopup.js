import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    return (
        <PopupWithForm title="New Place" name="add-card" btnText="Create" isOpen={props.isOpen} loadingBtnText="Saving..." onClose={props.onClose}>
            <input type="text" name="name" className="popup__input popup__input_type_img-title" placeholder="Title"
                id="img-input" required />
            <span className="popup__error img-input-error"></span>
            <input type="text" name="link" className="popup__input popup__input_type_link" placeholder="Image link"
                id="link-input" required />
            <span className="popup__error link-input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;