import mongoose, { mongo } from "mongoose";
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String, 
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    photoUrl:{
        type:String,
        default:""

    }
   




},{timestamps:true})

 const User=mongoose.model("User",userSchema);
 export default User;