import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import EditProfilePopup from './EditProfilePopup'
import AddPlacePopup from './AddPlacePopup'
import DeletePlacePopup from './DeletePlacePopup'
import EditAvatarPopup from './EditAvatarPopup'
import ImagePopup from './ImagePopup'
import { useState, useEffect } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import api from '../utils/api'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false)
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [currentUser, setCurrentUser] = useState({ name: 'Loading...', about: 'Loading...', avatar: '' })
  const [cards, setCards] = useState([])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  function handleCardClick(selectedCardProps) {
    setIsCardPopupOpen(true)
    setSelectedCard(selectedCardProps.link)
  }
  function handleDeletePlaceClick(selectedCardProps) {
    setIsDeletePlacePopupOpen(true)
    setSelectedCard(selectedCardProps._id)
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsCardPopupOpen(false)
    setIsDeletePlacePopupOpen(false)
    setSelectedCard(null)
  }
  function handleEscClose(event) {
    if (event.key === "Escape") closeAllPopups()
  }
  function handleOverlayClick(event) {
    if (event.target.classList.contains('popup_opened')) closeAllPopups()
  }
  function handleUpdateUser(event) {
    api.updateUser(event).then((user) => {
      setCurrentUser(user)
      closeAllPopups()
    }).catch(error => {
      console.log(`Error: ${error}`)
    })
  }
  function handleUpdateAvatar(event) {
    api.setUserAvatar(event).then((user) => {
      setCurrentUser(user)
      closeAllPopups()
    }).catch(error => {
      console.log(`Error: ${error}`)
    })
  }
  function handleCardLike({ likes, _id }) {
    const isLiked = likes.some(i => i._id === currentUser._id)
    isLiked ? api.removeLike(_id).then((newCard) => {
      setCards((state) => state.map((c) => c._id === _id ? newCard : c))
    }) : api.addLike(_id).then((newCard) => {
      setCards((state) => state.map((c) => c._id === _id ? newCard : c))
    }).catch(error => {
      console.log(`Error: ${error}`)
    })
  }
  function handleCardDelete({ _id }) {
    api.deleteCard(_id).then(() => {
      setCards((state) => state.filter((c) => c._id !== _id))
    }).catch(error => {
      console.log(`Error: ${error}`)
    })
  }
  function handleAddPlaceSubmit({ name, link }) {
    api.addCard({ name, link }).then((newCard) => {
      setCards([newCard, ...cards])
      closeAllPopups()
    }).catch(error => {
      console.log(`Error: ${error}`)
    })
  }

  useEffect(() => {
    document.addEventListener('click', handleOverlayClick)
    return () => {
      document.removeEventListener('click', handleOverlayClick)
    }
  })

  useEffect(() => {
    window.addEventListener("keydown", handleEscClose)
    return () => {
      window.removeEventListener("keydown", handleEscClose)
    }
  })

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res)
      }).catch(error => {
        console.log(`Error: ${error}`)
      })
  }, [])

  useEffect(() => {
    api.getUserData()
      .then((data) => {
        setCurrentUser(data)
      }).catch(error => {
        console.log(`Error: ${error}`)
      })
  }, [])

  return (
    <div className="root">
      <div className="root__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick} onDeletePlaceClick={handleDeletePlaceClick} onCardClick={handleCardClick} onCardDelete={handleCardDelete} onCardLike={handleCardLike} cards={cards} />
          <Footer />
          <EditProfilePopup name={currentUser.name} description={currentUser.about} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit} />
          <DeletePlacePopup isOpen={isDeletePlacePopupOpen} onClose={closeAllPopups} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <ImagePopup isOpen={isCardPopupOpen} onClose={closeAllPopups} selectedCard={selectedCard} />
        </CurrentUserContext.Provider >

      </div>
      {/* <div className="loading">
        <div className="loading__logo"></div>
      </div> testtest*/}
    </div >
  );
}

export default App;
