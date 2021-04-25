const express = require("express");
const router = express.Router()

const User = require("../models/user");

const { getUserById, getUser, updateUser, getAllUsers, getAllUserTodos } = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin, } = require("../controllers/auth");


router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
// router.put("/orders/user/:userId", isSignedIn, isAuthenticated, userPurchaseList);userPurchaseList
router.get("/users", getAllUsers);


router.get("/user/todo/:userId", isSignedIn, isAuthenticated, getAllUserTodos);



module.exports = router;