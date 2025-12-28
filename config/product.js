const {Schema,model} = require("mongoose");

const productSchema = new Schema(
{
    productName:{
        type:String,
        require:true,
    },
    quiantity: {
        type:Number,
        require:true,
    },
    price:{
        type:Number,
        require:true
    },
  
},
{
    timestamps:true,
}

)