import React, { useState, useEffect } from 'react';
// import {api} from '../utils/Api';

function Main(props) {
    const [userName, setUserName] = useState()
    const [userDescription, setUserDescription] = useState()
    const [userAvatar, setUserAvatar] = useState()
    const [cards, setCards] = useState([])


    const avatar = {
        backgroundImage: `url(${userAvatar})`
    }

    useEffect(() => {
        fetch('https://around.nomoreparties.co/v1/group-12/users/me', {
            method: "GET",
            headers: {
                authorization: "e09604a5-57aa-4b20-9a83-ea66e5c6924b",
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Error:${res.status}`)
        }).then(res => {
            setUserName(res.name);
            setUserAvatar(res.avatar)
            setUserDescription(res.about)
        })
        return () => { }
    }, [])

    useEffect(() => {
        fetch('https://around.nomoreparties.co/v1/group-12/cards', {
            method: "GET",
            headers: {
                authorization: "e09604a5-57aa-4b20-9a83-ea66e5c6924b",
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Error:${res.status}`)
        }).then(res => {
            setCards([...res, ...cards])
        })
        return () => { }
    }, [])

    function RenderCards() {
        console.log(cards)
        return (
            <>
                {cards.map((card, _id) =>
                    <article className="card" key={_id} >
                        <img src={`${card.link}`} alt="untitled image" className="card__pic" />
                        <button type="button" className="card__delete" aria-label="delete-card"></button>
                        <div className="card__content">
                            <h2 className="card__title">{card.name}</h2>
                            <div className="card__like-container">
                                <button type="button" className="card__like-btn" aria-label="like">
                                </button>
                                <p className="card__like-total">{card.likes.length}</p>
                            </div>
                        </div>
                    </article >
                )}
            </>
        )
    }

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
                <RenderCards />
            </section>
            {/* <template id="card-template">
                <article className="card">
                    <img src={`<%'https://picsum.photos/400'%>`} alt="untitled image" className="card__pic" />
                    <button type="button" className="card__delete" aria-label="delete-card"></button>
                    <div className="card__content">
                        <h2 className="card__title">{card.name}</h2>
                        <div className="card__like-container">
                            <button type="button" className="card__like-btn" aria-label="like">
                            </button>
                            <p className="card__like-total">{card.likes}</p>
                        </div>
                    </div>
                </article>
            </template> */}

        </main>
    )
}

export default Main;