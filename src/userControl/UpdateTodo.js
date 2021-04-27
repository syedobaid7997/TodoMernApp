import React, { useState, useEffect, useLayoutEffect } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { getTodo, updateTodo } from './helper/userapicall';
import { isAuthenticated } from '../auth/helper';


const UpdateTodo = ({match}) => {


    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    // const [values, setValues] = useState({
    //     name: "",
    // });

    
    const {user, token} = isAuthenticated();

    const preload = (todoId) => {
        getTodo(todoId).then(data => {
            if(data.error) {
                setError(true);
            } else {
                setName(data.name);
                
            }
        })
    }


    useEffect(() => {
        preload(match.params.todoId);
    }, []);

    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3" to="/user/dashboard">User home</Link>
        </div>
    );

    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);

        console.log(name);
        //backend request fired
        updateTodo(match.params.todoId, user._id, token, { name } )
        .then(data => {
            if (data.error) {
                console.log(data.error);
                setError(true);
            } else {
                setError("");
                setSuccess(true);
                setName("");
            }
        })

    }

    const handleChange = event => {
        setError("");
        setName(event.target.value)
    }




    const successMessage = () => {
        if(success){
            return <h4 className="text-success">Todo updated successfully</h4>
        }
    }

    const warningMessage = () => {
        if(error){
            return <h4 className="text-success">Failed to create todo</h4>
        }
    }

    const myTodoForm = () => (
        <form action="">
            <div className="form-group">
                <p className="lead">Edit the todo</p>
                <input 
                    type="text" 
                    className="form-control my-3"
                    onChange={handleChange} 
                    value={name}
                    autoFocus 
                    required 
                    placeholder="For.ex Summer"
                />
                <button onClick={onSubmit} className="btn btn-outline-info mb-3">Update Todo</button>
            </div>
        </form>
    )


    return (
        <Base 
            title="Update the Todo here" 
            description="Updation of Todos"
            className="container bg-info p-4"
        >
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {warningMessage()}
                    {myTodoForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    )

}

export default UpdateTodo;