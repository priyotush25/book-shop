const express = require('express');
const { registerUser, loginUser } = require('../controller/authController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)

// protect route
router.get("/profile", protect, (req, res)=>{
    res.json({
        message: "You can access",
        userId: req.userId,
    })
})


module.exports = router;