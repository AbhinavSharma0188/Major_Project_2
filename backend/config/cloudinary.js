import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary=async (filePath)=>{
    cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})
try {
    if(!filePath){
        return null;
    }
    const result=await cloudinary.uploader.upload(filePath,{
        resource_type:"auto"
    })
    
    // Attempt to delete local file, but don't fail if it doesn't work
    fs.unlink(filePath, (err) => {
        if (err) console.log("Error deleting file:", err);
    });

    return result.secure_url;
    
} catch (error) {
    console.log(error);
    // Attempt to delete file if upload failed
    fs.unlink(filePath, (err) => { if (err) console.log("Error deleting file on failure:", err); });
    return null;
}

}
export default uploadOnCloudinary;

    