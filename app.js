import express from "express";
import {config} from "dotenv"
import Routes from "./route.js"

import { connectDatabase } from "./config/database.js"
import mongoose from "mongoose";
export const app = express();


app.use(express.json());

app.use(express.urlencoded({extended:true}))
app.use("/", Routes);

config({path:"./config/config.env"})
mongoose.set("strictQuery",true)
connectDatabase()
app.listen(6000,()=>{
    console.log(`server running on port ${6000}`)
})