import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { EditProfilePopup, AddPlacePopup, DeletePlacePopup, EditAvatarPopup } from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { useState, useEffect } from 'react'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false)
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState('')

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
    setSelectedCard('')
  }
  function handleEscClose(event) {
    if (event.key === "Escape") closeAllPopups()
  }

  useEffect(() => {
    document.onclick = (arg) => {
      if (arg.target.classList.contains('popup_opened')) closeAllPopups()
    }
    return () => {

    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleEscClose)
    return () => {
      window.removeEventListener("keydown", handleEscClose)
    }
  }, [])

  return (
    <div className="root">
      <div className="root__container">
        <Header />
        <Main onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick} onDeletePlaceClick={handleDeletePlaceClick} onCardClick={handleCardClick} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} on />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <DeletePlacePopup isOpen={isDeletePlacePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <ImagePopup isOpen={isCardPopupOpen} onClose={closeAllPopups} selectedCard={selectedCard} />
      </div>
      {/* <div className="loading">
        <div className="loading__logo"></div>
      </div> */}


    </div>
  );
}

export default App;
