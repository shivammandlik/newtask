let mongoose=require("mongoose")
let studentSchema=new mongoose.Schema({
    userid:Number,
    title:String,
    priority:String,
    status:String

})
let task=mongoose.model("task",studentSchema)
module.exports =task
