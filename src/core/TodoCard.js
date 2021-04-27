import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';


const TodoCard = ({ 
  todo, 
  setReload = f => f,
  reload = undefined
}) => {

  const [redirect, setRedirect] = useState(false);
  //const [count, setCount] = useState(todo.count);

  const todoTitle = todo ? todo.name : "A simple todo"
  const ownerName = todo.owner;
  const ownerEmail = todo.owneremail;
  const ownerRole = todo.ownerrole;
//   const cardDescription = product ? product.description : "Default description"
//   const cardPrice = product ? product.price : "Default"

  


        return (
          <div className="card text-white bg-dark border border-info pt-4 pb-0 px-4 ">
            <div className="h3"><span className="badge bg-danger mr-2">Task</span> <span className="h4">{todoTitle}</span></div>
            <p >
              <div className="h4 float-end">
                <span className="badge bg-info mr-2 text-dark">{ownerName}</span>
              </div>
            </p>
            <p>
            {ownerRole === 1 && (
                <span className="badge bg-info mr-2 text-dark">Admin</span>
            )}
            {ownerRole === 0 && (
                <span className="badge bg-info mr-2 text-dark">User</span>
            )}
              <div className="h4 float-end">
                <span className="badge bg-info mr-2 text-dark">{ownerEmail}</span>
              </div>
            </p>
          </div>
        );
};


export default TodoCard;