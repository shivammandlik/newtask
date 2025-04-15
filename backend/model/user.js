// import mongoose from 'mongoose';
let mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
let usermodel= mongoose.model('User', userSchema);
module.exports=usermodel
