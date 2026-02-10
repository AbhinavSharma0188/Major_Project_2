import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
dotenv.config();





const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


app.listen(process.env.PORT, () => {
    connectDb();
    console.log(`Server is running on port ${process.env.PORT}`);
});