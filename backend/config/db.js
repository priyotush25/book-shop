import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connection successfully")
    }catch(err){
        console.log(err.message)
    }
}


export default connectDB;

