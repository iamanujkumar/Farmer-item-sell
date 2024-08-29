import express,{Request,Response} from 'express'
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './Routes/users';
import authRoutes from './Routes/auth'
import cookieParser from 'cookie-parser'
import path from 'path';
import { v2 as cloudinary} from 'cloudinary'
import myItemsRoutes from './Routes/ItemRoutes/MyItemRouets'
import ItemsRoutes from './Routes/ItemRoutes/ItemRoutes'

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

const app=express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
}));

mongoose.connect(process.env.MONGO_DB as string);

app.use(express.static(path.join(__dirname,"../../frontend/dist")))

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/my-items",myItemsRoutes)
app.use("/api/searchItems",ItemsRoutes)


// app.get("*",(req:Request,res:Response)=>{
//     res.sendFile(path.join(__dirname,"../../frontend/dist/index.html"));
// });

app.listen(8000,()=>{
    console.log("server is running");
})



