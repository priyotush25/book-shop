import jwt from "jsonwebtoken";

const authMiddleware = async(req, res, next)=>{
    try{

        // Get token 
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({
                success: false,
                message: "Access denied, No token provide"
            })
        }

        const token = authHeader.split(" ")[1];

        // verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        // store user information
        req.user = decoded

        next();


    }catch(error){
        res.status(401).json({
            success: false,
            message: "Invalid or expire token"
        })

    }

}

export default authMiddleware;