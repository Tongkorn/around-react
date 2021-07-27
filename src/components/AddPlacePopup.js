import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const [placeLink, setPlaceLink] = useState('')
    const [placeName, setPlaceName] = useState('')
    function handleAddPlaceName(e) {
        setPlaceName(e.target.value)
    }
    function handleAddPlaceLink(e) {
        setPlaceLink(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlaceSubmit({
            name: placeName,
            link: placeLink
        })
    }
    return (
        <PopupWithForm title="New Place" name="add-card" btnText="Create" isOpen={props.isOpen} loadingBtnText="Saving..." onClose={props.onClose} onSubmit={handleSubmit}>
            <input type="text" name="name" className="popup__input popup__input_type_img-title" placeholder="Title"
                id="img-input" required onChange={handleAddPlaceName} />
            <span className="popup__error img-input-error"></span>
            <input type="text" name="link" className="popup__input popup__input_type_link" placeholder="Image link"
                id="link-input" required onChange={handleAddPlaceLink} />
            <span className="popup__error link-input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;