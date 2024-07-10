const express = require("express");
const {model} = require("mongoose");
const User = require("../models/user");

const {
    handleCreateUser,
    getAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById
} = require("../controllers/user");

//Routes
const router = express.Router();

router.route('/')
    .get(getAllUsers)
    .post(handleCreateUser)

router.route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

module.exports = router;