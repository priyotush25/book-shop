import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

// Register endpoint
router.post("/register", registerUser);



// Login endpoint
router.get("/login", loginUser)


export default router;