import uploadOnCloudinary from "../config/cloudinary.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";

export const signUp=async(req,res)=>{
    try {
        const {userName,email,password}=req.body;
        let photoUrl;
        if(req.file){
            photoUrl=await uploadOnCloudinary(req.file.path);
        }


        if(!userName || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Invalid email"});
        }
        if(password.length<8){
            return res.status(400).json({message:"Password must be at least 8 characters long"});
        }


        
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            userName,
            email,
            password:hashedPassword,
            photoUrl,

        })
        
    } catch (error) {
        
    }
}