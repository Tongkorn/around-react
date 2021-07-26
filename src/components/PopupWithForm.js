import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''} `} >
            <form name={`form-${props.name}`} method="post" className={`popup__form popup__${props.name} `} onSubmit={props.onSubmit}>
                <h3 className="popup__title">{props.title}</h3>
                {props.children}
                <button type="submit" className="popup__btn popup__btn_type_save" aria-label="save" data-text-original={`${props.btnText}`}
                    data-text-saving={`${props.loadingBtnText}`}>{props.btnText}
                </button>
                <button type="button" className="popup__btn popup__btn_type_close" aria-label="close" onClick={props.onClose}></button>
            </form>
        </div>
    );
};

export default PopupWithForm;