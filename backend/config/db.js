import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://karthik:90740722265@cluster0.m0rm4.mongodb.net/food-del')
    .then(()=>{
        console.log("DB connected")
    })
}