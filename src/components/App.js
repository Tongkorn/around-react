import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { EditProfilePopup, AddPlacePopup, DeletePlacePopup, EditAvatarPopup, ViewPlacePopup } from './PopupWithForm'
import { useState } from 'react'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false)
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  };
  function handleEditProfileClick(e) {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  function handleCardClick() {
    setIsCardPopupOpen(!isCardPopupOpen)
  }
  function handleDeletePlaceClick() {
    setIsDeletePlacePopupOpen(!isDeletePlacePopupOpen)
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsCardPopupOpen(false)
    setIsDeletePlacePopupOpen(false)
  }

  return (
    <div className="root">
      <div className="root__container">
        <Header />
        <Main onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick} onCardClick={handleCardClick} onDeletePlaceClick={handleDeletePlaceClick} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <DeletePlacePopup isOpen={isDeletePlacePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <ViewPlacePopup isOpen={isCardPopupOpen} onClose={closeAllPopups} />
      </div>
      {/* <div className="loading">
        <div className="loading__logo"></div>
      </div> */}

      
    </div>
  );
}

export default App;
