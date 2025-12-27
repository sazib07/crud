const express = require ("express");
const dbConfig = require("./config/db.config");
const todoModel = require("./model/todo.model");
const mongoose = require("mongoose");

const app = express()
const port =8080;
app.use(express.json())

//databaseconnect
dbConfig()
//dbconnect

//createData
app.post("/create",async(req,res)=>{
    let {task} = req.body;
 let createTodo= new todoModel({
    task:task
 })
 await createTodo.save();

 res.send(createTodo)
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
