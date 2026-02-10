import jwt from "jsonwebtoken";
const isAuth=async (req,res,next)=>{
   try {
     const {token}=req.cookies;
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    const verifyToken=jwt.verify(token,process.env.JWT_SECRET);

    if(!verifyToken){
        return res.status(401).json({message:"Unauthorized"});
    }
    req.userId=verifyToken.id;
    next();
    
   } catch (error) {
    return res.status(401).json({message:'is auth error',error});
   }
}
export default isAuth;