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
import { apiInstance } from '../utils/api'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false)
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [currentUser, setCurrentUser] = useState({ name: 'Loading...', about: 'Loading...', avatar: '' })

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
    apiInstance.updateUser(event).then((res) => {
      setCurrentUser(res)
      closeAllPopups()
    })
  }
  function handleUpdateAvatar(event) {
    apiInstance.setUserAvatar(event).then((res) => {
      setCurrentUser(res)
      closeAllPopups()
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
    apiInstance.getUserData()
      .then((data) => {
        setCurrentUser(data)
      }).catch(error => {
        return (`Error: ${error}`)
      })
  }, [])

  return (
    <div className="root">
      <div className="root__container">
        <Header />
        <CurrentUserContext.Provider value={currentUser}>
          <Main onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick} onDeletePlaceClick={handleDeletePlaceClick} onCardClick={handleCardClick} />
        </CurrentUserContext.Provider>
        <Footer />
        <CurrentUserContext.Provider value={currentUser}>
          <EditProfilePopup name={currentUser.name} description={currentUser.about} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
          <DeletePlacePopup isOpen={isDeletePlacePopupOpen} onClose={closeAllPopups} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        </CurrentUserContext.Provider >
        <ImagePopup isOpen={isCardPopupOpen} onClose={closeAllPopups} selectedCard={selectedCard} />
      </div>
      {/* <div className="loading">
        <div className="loading__logo"></div>
      </div> */}
    </div>
  );
}

export default App;
