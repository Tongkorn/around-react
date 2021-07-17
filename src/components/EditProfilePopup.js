import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    return (
        <PopupWithForm title="Edit Profile" name="edit-profile" btnText="Save" isOpen={props.isOpen} loadingBtnText="Saving..." onClose={props.onClose} >
            <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Name" id="name-input"
                required />
            <span className="popup__error name-input-error"></span>
            <input type="text" name="about" className="popup__input popup__input_type_job" placeholder="About me" id="job-input"
                required />
            <span className="popup__error job-input-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup