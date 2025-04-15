// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import authRoutes from './router/authrouetr.js';
// import taskRoutes from './router/taskroter.js';
// import cors from 'cors';


let express=require("express")
let dotenv=require("dotenv");
let mongoose=require("mongoose")
let authRoutes=require("./router/authrouetr.js")
let taskRoutes=require("./router/taskroter.js")
let cors=require("cors")
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log('DB Connected'));

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
