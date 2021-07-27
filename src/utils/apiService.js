class ApiService {
    constructor(urlToRequestedResource, optionsObj) {
        this.url = urlToRequestedResource;
        this.options = optionsObj;
        this.groupId = "group-12";
        this.handlingResponse = res => res.ok ? res.json() : Promise.reject(`Error:${res.status}`)
    }

    getUserData() {
        return fetch(`${this.url}${this.groupId}/users/me`,
            this.options
        )
            .then(this.handlingResponse)
    }

    getInitialCards() {
        return fetch(`${this.url}/${this.groupId}/cards`, this.options)
            .then(this.handlingResponse)
    }

    updateUser(userData) {
        return fetch(`${this.url}/${this.groupId}/users/me`, {
            method: "PATCH",
            headers: this.options.headers,
            body: JSON.stringify({
                name: userData.name,
                about: userData.about
            })
        })
            .then(this.handlingResponse)
    }

    addCard(cardData) {
        return fetch(`${this.url}/${this.groupId}/cards`, {
            method: "POST",
            headers: this.options.headers,
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link,
            })
        })
            .then(this.handlingResponse)
    }

    deleteCard(cardId) {
        return fetch(`${this.url}/${this.groupId}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.options.headers
        })
            .then(this.handlingResponse)
    }

    addLike(cardId) {
        return fetch(`${this.url}/${this.groupId}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: this.options.headers
        })
            .then(this.handlingResponse)
    }

    removeLike(cardId) {
        return fetch(`${this.url}/${this.groupId}/cards/likes/${cardId}`, {
            method: "DELETE",
            headers: this.options.headers
        })
            .then(this.handlingResponse)
    }

    setUserAvatar(avatarLink) {
        return fetch(`${this.url}/${this.groupId}/users/me/avatar`, {
            method: "PATCH",
            headers: this.options.headers,
            body: JSON.stringify({
                avatar: avatarLink.avatar
            }),
        })
            .then(this.handlingResponse)
    }
}

const apiInstance = new ApiService("https://around.nomoreparties.co/v1/", {
    method: "GET",
    headers: {
        authorization: "e09604a5-57aa-4b20-9a83-ea66e5c6924b",
        "Content-Type": "application/json"
    }
})

export default apiInstance
// test