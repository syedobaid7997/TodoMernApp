const express = require("express")
const router = express.Router()

const { getTodoById, createTodo, getTodo, getAllTodo, updateTodo, removeTodo} = require("../controllers/todo");
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("todoId", getTodoById);

//actual routes goes here
//create routes
router.post(
    "/todo/create/:userId", 
    isSignedIn, 
    isAuthenticated,
    createTodo
    );

//isAdmin,


//read routes
router.get("/todo/:todoId", getTodo);
router.get("/todos", getAllTodo);

//update
router.put(
    "/todo/:todoId/:userId", 
    isSignedIn, 
    isAuthenticated,
    updateTodo
    );

//delete
router.delete(
    "/todo/:todoId/:userId", 
    isSignedIn, 
    isAuthenticated, 
    removeTodo 
    );


module.exports = router;