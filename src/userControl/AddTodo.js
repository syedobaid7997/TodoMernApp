import React, {useState} from 'react';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { Link } from "react-router-dom";
import { createTodo } from './helper/userapicall';



const AddTodo = () => {


    const [values, setValues] = useState({
        name:"",
        owner:"",
        owneremail:"",
        ownerrole:0,
    });

    const {
        name,
        owner,
        owneremail,
        ownerrole
    } = values;
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const {user, token} = isAuthenticated();


    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3" to="/user/dashboard">User home</Link>
        </div>
        
    );

    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);

        //backend request fired
        createTodo(user._id, token, { name, owner, owneremail, ownerrole } )
        .then(data => {
            if (data.error) {
                setError(true);
            } else {
                setError("");
                setSuccess(true);
                setValues({
                    ...values,
                    name:"",
                    owner:"",
                    owneremail:"",
                });
            }
        })

    }

    const handleChange = event => {
        setError("");
        setValues({
            ...values,
            name:event.target.value,
            owner: user.name,
            owneremail: user.email,
            ownerrole: user.role
        })
    }

    const successMessage = () => {
        if(success){
            return <h4 className="text-success">Todo created successfully</h4>
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
                <p className="lead">Enter the category</p>
                <input 
                    type="text" 
                    className="form-control my-3"
                    onChange={handleChange} 
                    value={name}
                    autoFocus 
                    required 
                    placeholder="For.ex Summer"
                />
                <button onClick={onSubmit} className="btn btn-outline-info mb-3">Create Todo</button>
            </div>
        </form>
    )


    return (
        <Base 
            title="Create a Todo here" 
            description="Add a new Todo"
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



export default AddTodo;