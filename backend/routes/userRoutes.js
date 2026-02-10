import express from 'express'
import isAuth from '../middlewares/isAuth.js';
const userRouter=express.Router();
userRouter.get("/user",isAuth,getCurrentUsers);
export default userRouter;