import bcrypt from "bcrypt";
import User from "../models/User.js";


// Registration Controller
export const registerUser = async(req, res) =>{
    try{
        const {name, email, password} = req.body;

        // require check
        if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are require"
            })
        }

        // existing user
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(409).json({
                success: false,
                message: "User already exist"
            })
        }

        //hash password
        const hashPassword = await bcrypt.hash(password, 10);

        //user create 
        const user = await User.create({
            name, 
            email,
            password: hashPassword
        });
        res.status(201).json({
            success: true,
            message: "Registration successful",
           user: {
                name: user.name,
                email: user.email,
                role: user.role,
                password: user.password
            }
        })
        

    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// login Controller
export const loginUser = async(req, res)=>{
    try{
        const {email, password} = req.body;

        // require
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email and Password are Require"
            })
        }

        // Find user
        const user = await User.findOne({email: email});

        if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid Email or Password"
            })
        }

        // compare password
        const isMatchPassword = await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatchPassword){
            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            })
        }


        // Login successful
        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })

    
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
