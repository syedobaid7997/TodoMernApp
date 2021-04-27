import React from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper/index';
import {Link} from "react-router-dom";


const UserDashBoard = () => {

  const {
    user : {name, email, role}
  } = isAuthenticated();


  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">User Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/user/create/todo" className="nav-link text-success">
              Create Todos
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/todos" className="nav-link text-success">
              Manage Todos
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  const adminRightSide = () => {
    //
    return (
    
      <div className="card mb-4">
        <h4 className="card-header">User Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge bg-success mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge bg-success mr-2">Email:</span> {email}
          </li>
          <li className="list-group-item">
            <span className="badge bg-danger mr-2">Authenticated Area - User</span>
          </li>
        </ul>
      </div>
      
    )
  }

  return (
    <Base title="Welcome to User area" description="Manage all of your todos here" className="container bg-success p-4">
       
        <div className="row">
          <div className="col-3">{adminLeftSide()}</div>
          <div className="col-9">{adminRightSide()}</div>
        </div>
        
    </Base>
  )
}

export default UserDashBoard;