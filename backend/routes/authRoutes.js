import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Register endpoint
router.post("/register", registerUser);

// Login endpoint
router.post("/login", loginUser);   


// Protected API
router.get("/profile", authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Profile accessed successfully",
        user: req.user
    });
});




export default router;