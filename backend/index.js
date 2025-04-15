let express=require("express")
let mongoose=require("mongoose")
let tasks=require("./task.js")

let app=express()

mongoose.connect("mongodb://127.0.0.1:27017/school")
console.log("start")

let studentSchema=new mongoose.Schema({
    email:String,
    password:String
})
let user=mongoose.model("students",studentSchema)


app.post("/reg",async(req ,res)=>{

    const {email,password} =req.body
  let existinguser=await user.findOne({email})
  if(existinguser){
    return res.json({meassage:"user alrady exsit"})
  }
let newuser=new user({email,password})
newuser.save()
return res.json({meassage:"user register successfuuly"})

})

app.post("/login",async(req ,res)=>{

    const {email,password} =req.body
  let users=await user.findOne({email})
  if(!users){
    return res.json({meassage:"invalid email"})
  }
if(user.password!==password){
    return res.json({meassage:"innvalid emaul or password"})
}
return res.json({meassage:"user login sucessfully"})
})

app.get("/task:id",async(req ,res)=>{
let body=req.body
let data=await new tasks(body)
let result=data.save()

})


app.post("/tasscomplite:id",async(req ,res)=>{
    let id=req.params.id
    let data =await tasks.findOne({id})
    let result=data.save()
    
    })


app.listen(1000,()=>{
    console.log("start server")
})