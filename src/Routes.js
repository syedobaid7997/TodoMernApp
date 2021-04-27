import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
import Home from "./core/Home";
import AdminDashBoard from './user/AdminDashboard';
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserDashBoard from './user/UserDashBoard';
import AddTodo from './userControl/AddTodo';
import ManageAdminTodos from './userControl/ManageAdminTodos';
import ManageTodos from './userControl/ManageTodos';
import UpdateTodo from './userControl/UpdateTodo';




const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/signup" exact component={Signup}  />
        <Route path="/signin" exact component={Signin}  />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <PrivateRoute path="/user/create/todo" exact component={AddTodo} />
        <PrivateRoute path="/user/todos" exact component={ManageTodos} />
        <PrivateRoute path="/user/todo/update/:todoId" exact component={UpdateTodo} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute path="/admin/create/todo" exact component={AddTodo} />
        <AdminRoute path="/admin/todos" exact component={ManageAdminTodos} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
