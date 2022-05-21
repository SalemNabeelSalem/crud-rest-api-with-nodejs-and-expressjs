import express from "express";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";

const router = express.Router();

// GET /users -> get all users.
router.get("/users", getUsers);

// GET /users/:id -> get user by id.
router.get("/users/:id", getUser);

// POST /users -> create new user.
router.post("/users", createUser);

// PUT /users/:id -> update user by id.
router.patch("/users/:id", updateUser);

// DELETE /users/:id -> delete user by id.
router.delete("/users/:id", deleteUser);

export default router;
