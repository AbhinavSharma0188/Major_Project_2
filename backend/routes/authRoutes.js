import express from "express";
import { signIn, signOut, signUp } from "../controllers/authControllers.js";
import upload from "../middleware/multer.js";
const authRouter=express.Router();
authRouter.post("/signup",upload.single("photoUrl"),signUp)
authRouter.post("/signin",signIn)
authRouter.get("/signout",signOut)

