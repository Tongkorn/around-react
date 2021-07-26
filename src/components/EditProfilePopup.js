import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    // Subscription to the context
    const currentUser = useContext(CurrentUserContext)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    // After loading the current user from the API
    // their data will be used in managed components.
    useEffect(() => {
        setName(currentUser.name)
        setDescription(currentUser.about)
    }, [currentUser])

    function handleChangeName(e) {
        setName(e.target.value)
    }
    function handleChangeDescription(e) {
        setDescription(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateUser({
            name, about: description
        })
    }

    return (
        <PopupWithForm title="Edit Profile" name="edit-profile" btnText="Save" isOpen={props.isOpen} loadingBtnText="Saving..." onClose={props.onClose} onSubmit={handleSubmit}>
            <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Name" id="name-input"
                required defaultValue={name} onChange={handleChangeName} />
            <span className="popup__error name-input-error"></span>
            <input type="text" name="description" className="popup__input popup__input_type_job" placeholder="About me" id="job-input"
                required defaultValue={description} onChange={handleChangeDescription} />
            <span className="popup__error job-input-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup