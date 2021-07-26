import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    const avatarRef = React.useRef()
    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        })
    }
    return (
        <PopupWithForm title="Change profile picture" name="edit-avatar" btnText="Yes" isOpen={props.isOpen} loadingBtnText="Saving..." onClose={props.onClose} onSubmit={handleSubmit}>
            <input type="text" name="avatar" className="popup__input popup__input_type_link" placeholder="Image link"
                id="avatar-input" ref={avatarRef} required />
            <span className="popup__error avatar-input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;