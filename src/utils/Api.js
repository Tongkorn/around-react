import Api from '../components/Api.js'

const api = new Api(
    "https://around.nomoreparties.co/v1/", {
    method: "GET",
    headers: {
        authorization: "e09604a5-57aa-4b20-9a83-ea66e5c6924b",
        "Content-Type": "application/json"
    }
})

export default api;