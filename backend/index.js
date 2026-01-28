import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
dotenv.config();




const app = express();
app.get("/",(req,res)=>{
    res.send("hello")
})
connectDb();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});