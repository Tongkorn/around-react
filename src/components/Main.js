
function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar">
                        <button type="button" className="profile__edit-avatar" aria-label="edit-avatar">
                        </button>
                    </div>
                    <div className="profile__detail">
                        <div className="profile__text">
                            <h1 className="profile__name">Jacques Cousteau</h1>
                            <p className="profile__job">Explorer</p>
                        </div>
                        <button type="button" className="profile__edit-btn" aria-label="edit-name">
                        </button>
                    </div>
                </div>
                <button type="button" className="profile__add-btn" aria-label="add-profile">
                </button>
            </section>``
            <section className="cards">

            </section>
        </main>
    )
}

export default Main;