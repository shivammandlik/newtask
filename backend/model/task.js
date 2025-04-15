// import mongoose from 'mongoose';

let mongoose=require("mongoose")

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  priority: String,
  status: { type: String, default: 'Pending' },
});

let usermodel= mongoose.model('Task', taskSchema);
module.exports=usermodel