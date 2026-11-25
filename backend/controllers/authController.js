import bcrypt from "bcrypt";
import User from "../models/User.js";


export const registerUser = async(req, res) =>{
    try{
        const {name, email, password} = req.body;

        // require check
        if(!name || !email || !password){
            return res.json({
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

