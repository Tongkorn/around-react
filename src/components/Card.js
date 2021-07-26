import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const isOwn = props.cardInfo.owner._id === currentUser._id
    const cardDeleteButtonClassName = (
        `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    );
    const isLiked = props.cardInfo.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `card__like-btn ${isLiked ? 'card__like_active' : ''}`
    );
    function handleClick() {
        props.onCardClick(props.cardInfo)
    }
    function handleLike(){
        props.onCardLike(props.cardInfo)
    }
    function handleDelete(){
        props.onCardDelete(props.cardInfo)
    }
    
    return (
        <article className="card">
            <img src={`${props.cardInfo.link}`} alt={props.cardInfo.name} className="card__pic" onClick={handleClick} />
            <button type="button" className={`${cardDeleteButtonClassName}`} aria-label="delete-card" onClick={handleDelete}></button>
            <div className="card__content">
                <h2 className="card__title">{props.cardInfo.name}</h2>
                <div className="card__like-container">
                    <button type="button" className={`${cardLikeButtonClassName}`} aria-label="like" onClick={handleLike}>
                    </button>
                    <p className="card__like-total">{props.cardInfo.likes.length}</p>
                </div>
            </div>
        </article >
    )
}
export default Card;