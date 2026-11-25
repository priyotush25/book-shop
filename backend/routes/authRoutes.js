import express from "express";
import { registerUser } from "../controllers/authController.js";


const router = express.Router();

// Register endpoind
router.post("/register", registerUser);


export default router;


