const express = require ("express");
// const todoModel = require("./model/todo.model");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");
// const itemModel = require("./model/item.model");
const { ProductModel } = require("./config/product");

const app = express()
const port =8080;
require(`dotenv`).config()

console.log(process.env.DB_PASSWORD)
app.use(express.json())

//databaseconnect
dbConfig()
//dbconnect

//createData
app.post("/create", async (req, res) => {
  try {
    const { Name,Email, age} = req.body;

    await ProductModel.create({
      Name,
      Email,
      age,
    });

    return res.status(201).json({
      success: true,
      message: "created successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
});


app.get("/get-all",async(req,res)=>{
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

//update product
app.patch("/update/:id",async(req,res)=>{
    try{
  let {id} =req.params;
//   let {productName,quantity,price} =req.body;
  let updatProduct = await ProductModel.findOneAndUpdate({_id:id},req.body,{new:true});
  return res.status(200).json({success:true,message:"product updated"})
    }catch(error){
         return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
    }
})


  





// Ufi6KbAaCuzbaTbO
