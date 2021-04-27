import { API } from "../../backend";

//TodoList calls

// Create a Todo
export const createTodo = (userId, token, todo) => {
    return fetch(`${API}/todo/create/${userId}` , {
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(todo)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

// Read a Todo
export const getTodo = todoId => {
    return fetch(`${API}/todo/${todoId}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}


//Update the todo
export const updateTodo = (todoId, userId, token, todo) => {
    return fetch(`${API}/todo/${todoId}/${userId}` , {
        method: "PUT",
        headers:{
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(todo)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

//Delete a Todo
export const deleteTodo = (todoId, userId, token) => {
    return fetch(`${API}/todo/${todoId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
} 


export const getUserTodos = (userId, token) => {
    return fetch(`${API}/user/todo/${userId}`, {
        method: "GET",headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

