const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Register User
const registerUser =async (req, res)=>{
    try{

        const {name, email, password} = req.body;

        // check empty fields
        if(!name || !email || !password){
            return res.status(400).json({
                message: "Required Fields"
            })
        }

        // check existing user
        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({
                message: "user already exists"
            })
        }

        // hashed Password
        const hashedPassword = await bcrypt.hash(password, 10)

        // create user 
        const user = await User.create({
            name, 
            email,
            password: hashedPassword,
        })

        res.status(201).json({
            message: "user create successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        })


    }catch(error){
        res.status(500).json({
            message: "server error",
            error: error.message,
        })
    }

}

// Login User
const loginUser = async(req, res) =>{
    try{

        const {email, password} = req.body;

        // check fields
        if(!email || !password){
            res.status(400).json({
                message: "Email and Password are required",
            })
        }

        // Find user
        const user = await User.findOne({email});

        if(!user){
            res.status(401).json({
                message: "Invalid email or password",
            })
        }

        // check password 
        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if(!isPasswordCorrect){
            return res.status(401).json({
                message: "Invalid Password",
            })
        }

        // create JWT
        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        })




    }catch(error){
        console.error(error)
        res.status(500).json({
            message: "server error"
        })
    }

}




module.exports = {
    registerUser,
    loginUser,
}