import React, { useState, useEffect } from 'react';
import Card from './Card';
import { apiInstance } from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({ onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick, onDeletePlaceClick }) {
    const [cards, setCards] = useState([])
    const currentUser = React.useContext(CurrentUserContext)
    const currentUserAvatar = {
        backgroundImage: `url(${currentUser.avatar})`
    }

    useEffect(() => {
        apiInstance.getInitialCards()
            .then((data) => {
                setCards([...data, ...cards])
            }).catch(error => {
                return (`Error: ${error}`)
            })
    }, [setCards])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar" style={currentUserAvatar}>
                        <button type="button" className="profile__edit-avatar" aria-label="edit-avatar" onClick={onEditAvatarClick}>
                        </button>
                    </div>
                    <div className="profile__detail">
                        <div className="profile__text">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <p className="profile__job">{currentUser.about}</p>
                        </div>
                        <button type="button" className="profile__edit-btn" aria-label="edit-name" onClick={onEditProfileClick} >
                        </button>
                    </div>
                </div>
                <button type="button" className="profile__add-btn" aria-label="add-profile" onClick={onAddPlaceClick}>
                </button>
            </section>
            <section className="cards" >
                {cards.map((card) => (
                    <Card cardInfo={card} key={card._id} onCardClick={onCardClick} onDeletePlaceClick={onDeletePlaceClick} />
                )
                )}
            </section>
        </main>
    )
}

export default Main;