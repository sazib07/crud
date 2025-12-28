const express = require ("express");
// const todoModel = require("./model/todo.model");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");
const itemModel = require("./model/item.model");

const app = express()
const port =8080;
require(`dotenv`).config()

console.log(process.env.DB_PASSWORD)
app.use(express.json())

//databaseconnect
dbConfig()
//dbconnect

//createData
app.post("/create",(req,res)=>{
 try{
  let {task} = req.body ;
  if(!task){
 return res.status(404).json({
        success:false, 
       message:"Task is required",
    });
  }else{
   let createTask = new itemModel({
    
   })
  }
 }catch(error){
    return res.status(500).json({
        success:false, 
        message:error.message ||"internal server error",
    });
 }
})

app.get("/alltodos",async(req,res)=>{
  let alltodos = await todoModel.find({});
   res.status(200).json({success :true,message: "All todos",data:alltodos});
})

//deletedata
app.delete("/delete/:id",async (req,res)=>{
    let (id) = req.params;
    let deletetodo =await todoModel.findOneAndDelete({_id:id});
    res.status(200).json({success:true,message:"Todo Deleted",data:deletetodo});
})

app.listen(port,()=>{
    console.log(`server is running port number ${port}`)
})










// Ufi6KbAaCuzbaTbO
//18m