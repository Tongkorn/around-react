import React, { useState, useEffect } from 'react';
import Card from './Card';
import api from '../utils/api';

function Main(props) {
    const [userName, setUserName] = useState()
    const [userDescription, setUserDescription] = useState()
    const [userAvatar, setUserAvatar] = useState()
    const [cards, setCards] = useState([])

    const avatar = {
        backgroundImage: `url(${userAvatar})`
    }

    useEffect(() => {
        api.getUserData()
            .then((data) => {
                setUserName(data.name);
                setUserAvatar(data.avatar)
                setUserDescription(data.about)
            }).catch(error => {
                return (`Error: ${error}`)
            })
        return () => { }
    }, [])

    useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards([...data, ...cards])
            }).catch(error => {
                return (`Error: ${error}`)
            })
        return () => { }
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar" style={avatar}>
                        <button type="button" className="profile__edit-avatar" aria-label="edit-avatar" onClick={props.onEditAvatarClick}>
                        </button>
                    </div>
                    <div className="profile__detail">
                        <div className="profile__text">
                            <h1 className="profile__name">{userName}</h1>
                            <p className="profile__job">{userDescription}</p>
                        </div>
                        <button type="button" className="profile__edit-btn" aria-label="edit-name" onClick={props.onEditProfileClick} >
                        </button>
                    </div>
                </div>
                <button type="button" className="profile__add-btn" aria-label="add-profile" onClick={props.onAddPlaceClick}>
                </button>
            </section>``
            <section className="cards" >
                {cards.map((card, index) =>
                    <Card card={card} key={index} onCardClick={props.onCardClick} onDeletePlaceClick={props.onDeletePlaceClick} />
                )}
            </section>
        </main>
    )
}

export default Main;