import React from 'react';

function ImagePopup(props) {
    console.log(props.selectedCard)
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''} `} data-image="popup__view_image">
            <figure className="popup__card">
                <img src={`${props.selectedCard}`} className="popup__img" alt="untitled image" />
                <figcaption className="popup__img-caption"></figcaption>
                <button type="button" className="popup__btn popup__btn_type_close" aria-label="close" onClick={props.onClose}></button>
            </figure>
        </div>
    )
}

export default ImagePopup;