import React from 'react';

function Cards(props) {
    function handleClick() {
        props.onCardClick(props.card)
    }
    return (
        <>
            <article className="card"  >
                <img src={`${props.card.link}`} alt="untitled image" className="card__pic" onClick={handleClick} />
                <button type="button" className="card__delete" aria-label="delete-card"></button>
                <div className="card__content">
                    <h2 className="card__title">{props.card.name}</h2>
                    <div className="card__like-container">
                        <button type="button" className="card__like-btn" aria-label="like">
                        </button>
                        <p className="card__like-total">{props.card.likes.length}</p>
                    </div>
                </div>
            </article >
        </>
    )
}
export default Cards;