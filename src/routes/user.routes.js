import express from "express";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const UserRouters = express.Router();

// GET /users -> get all users.
UserRouters.get("/", getUsers);

// GET /users/:id -> get user by id.
UserRouters.get("/:id", getUser);

// POST /users -> create new user.
UserRouters.post("/", createUser);

// PUT /users/:id -> update user by id.
UserRouters.patch("/:id", updateUser);

// DELETE /users/:id -> delete user by id.
UserRouters.delete("/:id", deleteUser);

export default UserRouters;
