import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className="root">
      <div className="root__container">
        <Header/>
        <Main/>
        <Footer/>
        <div className="popup" data-form="popup__form_edit">
          <form name="form-edit-profile" method="post" className="popup__form popup__edit-profile" noValidate>
            <h3 className="popup__title">Edit Profile</h3>
            <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Name" id="name-input"
              required />
            <span className="popup__error name-input-error">Please fill out this field.</span>
            <input type="text" name="about" className="popup__input popup__input_type_job" placeholder="About me" id="job-input"
              required />
            <span className="popup__error job-input-error">Please fill out this field.</span>
            <button type="submit" className="popup__btn popup__btn_type_save" aria-label="save" data-text-original="Save"
              data-text-saving="Saving...">Save</button>
            <button type="button" className="popup__btn popup__btn_type_close" aria-label="close"></button>
          </form>
        </div>
        <div className="popup" data-form="popup__form_add">
          <form name="form-add-card" method="post" className="popup__form  popup__add-card" noValidate>
            <h3 className="popup__title">New place</h3>
            <input type="text" name="name" className="popup__input popup__input_type_img-title" placeholder="Title"
              id="img-input" required />
            <span className="popup__error img-input-error"></span>
            <input type="text" name="link" className="popup__input popup__input_type_link" placeholder="Image link"
              id="link-input" required />
            <span className="popup__error link-input-error"></span>
            <button type="submit" className="popup__btn popup__btn_type_save" aria-label="save" data-text-original="Create"
              data-text-saving="Saving...">Create</button>
            <button type="button" className="popup__btn popup__btn_type_close" aria-label="close"></button>
          </form>
        </div>
        <div className="popup" data-image="popup__view_image">
          <figure className="popup__card">
            <img src="<%'https://picsum.photos/400'%>" className="popup__img" alt="untitled image" />
            <figcaption className="popup__img-caption">Untitled image</figcaption>
            <button type="button" className="popup__btn popup__btn_type_close" aria-label="close"></button>
          </figure>
        </div>
        <div className="popup" data-form="popup__form_delete">
          <form name="form-confirm-delete" method="post" className="popup__form popup__confirm-delete">
            <h3 className="popup__title">Are you sure?</h3>
            <button className="popup__btn popup__btn_type_save">Yes</button>
            <button type="button" className="popup__btn popup__btn_type_close" aria-label="close"></button>
          </form>
        </div>
        <div className="popup" data-form="popup__form_edit-avatar">
          <form name="form-edit-avatar" method="post" className="popup__form popup__edit-avatar" noValidate>
            <h3 className="popup__title">Change profile picture</h3>
            <input type="text" name="avatar" className="popup__input popup__input_type_link" placeholder="Image link"
              id="avatar-input" required />
            <span className="popup__error avatar-input-error"></span>
            <button className="popup__btn popup__btn_type_save" data-text-original="Yes"
              data-text-saving="Saving...">Yes</button>
            <button type="button" className="popup__btn popup__btn_type_close" aria-label="close"></button>
          </form>
        </div>
      </div>
      {/* <div className="loading">
        <div className="loading__logo"></div>
      </div> */}

      <template id="card-template">
        <article className="card">
          <img src="<%'https://picsum.photos/400'%>" alt="untitled image" className="card__pic" />
          <button type="button" className="card__delete" aria-label="delete-card"></button>
          <div className="card__content">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button type="button" className="card__like-btn" aria-label="like">
              </button>
              <p className="card__like-total">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
