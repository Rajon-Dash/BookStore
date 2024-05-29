// const express = require('express')
// const dotenv = require("dotenv");

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRouter from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"
const app = express() 
dotenv.config();


// Middle wire
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT||3000
const URL = process.env.MongoDBURL



app.use("/book",bookRouter);
app.use("/user",userRoute)

// This part not importent just for browser showing
app.get('/', function (req, res) {
    res.send('Hello World Rajon')
  })

mongoose.connect(URL)
.then(()=>{
    console.log("Database Connect")
    app.listen(PORT,(req,res)=>{
        console.log(`server runing port ${PORT}`)
    })
})
.catch(()=>{
    console.log("Connection Failed")
})



