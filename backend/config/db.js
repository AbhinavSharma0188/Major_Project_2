import mongoose from "mongoose";

const connectDb=async()=>{
    
    try{
       await  mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected")
    }
    catch{
        console.log("DB error")
    }
}
export default connectDb;