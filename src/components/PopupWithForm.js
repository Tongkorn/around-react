import React from 'react';

function PopupWithForm(props) {
    return (
        <>
            <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''} `} >
                <form name={`form-${props.name}`} method="post" className={`popup__form popup__${props.name} `} noValidate>
                    <h3 className="popup__title">{props.title}</h3>
                    {props.children}
                    <button type="submit" className="popup__btn popup__btn_type_save" aria-label="save" data-text-original={`${props.btnText}`}
                        data-text-saving={`${props.loadingBtnText}`}>{props.btnText}</button>
                    <button type="button" className="popup__btn popup__btn_type_close" aria-label="close" onClick={props.onClose}></button>
                </form>
            </div>
        </>
    );
};

function EditProfilePopup(props) {
    return (
        <PopupWithForm title="Edit Profile" name="edit-profile" btnText="Save" isOpen={props.isOpen} loadingBtnText="Saving..." onClose={props.onClose}>
            <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Name" id="name-input"
                required />
            <span className="popup__error name-input-error"></span>
            <input type="text" name="about" className="popup__input popup__input_type_job" placeholder="About me" id="job-input"
                required />
            <span className="popup__error job-input-error"></span>
        </PopupWithForm>
    );
}

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

function DeletePlacePopup(props) {
    return (
        <PopupWithForm title="Are you sure?" name="confirm-delete" btnText="Yes" isOpen={props.isOpen} onClose={props.onClose} />
    )
}

function EditAvatarPopup(props) {
    return (
        <PopupWithForm title="Change profile picture" name="edit-avatar" btnText="Yes" isOpen={props.isOpen} loadingBtnText="Saving..." onClose={props.onClose}>
            <input type="text" name="avatar" className="popup__input popup__input_type_link" placeholder="Image link"
                id="avatar-input" required />
            <span className="popup__error avatar-input-error"></span>
        </PopupWithForm>
    )
}


export { EditProfilePopup, AddPlacePopup, DeletePlacePopup, EditAvatarPopup };