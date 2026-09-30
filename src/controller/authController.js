const bcrypt = require('bcryptjs');
const User = require('../models/userModel');


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
                id: user_id,
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


module.exports = {
    registerUser,
}