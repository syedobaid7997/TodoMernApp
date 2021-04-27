import { API } from "../../backend";

export const getTodos = () => {
    return fetch(`${API}/todos`, {
        method: "GET"     
    })
    .then(response => {
        return response.json()
    })
    .catch( err => console.log(err));
}