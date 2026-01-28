import uploadOnCloudinary from "../config/cloudinary.js";
import gentoken from "../config/token.js";
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
        let token=await gentoken(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(200).json({message:"User registered successfully",user,token});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}
export const signIn=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        const isPasswordMatched=await bcrypt.compare(password,
            user.password
        )
if(!isPasswordMatched){
    return res.status(400).json({message:"Invalid credentials"})
}
let token=await gentoken(user._id);
res.cookie("token",token,{
    httpOnly:true,
    secure:false,
    sameSite:"strict",
    maxAge:7*24*60*60*1000
})
return res.status(200).json({message:"User logged in successfully",user,token})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"})
    }
}