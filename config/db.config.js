const { default: mongoose } = require("mongoose");

async function dbConfig(){
    mongoose.connect(`mongodb+srv://crud:Ufi6KbAaCuzbaTbO@cluster0.vm92yrn.mongodb.net/crud?appName=Cluster0`).then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err.message)
    })
}

module.exports =dbConfig










// const  mongoose  = require("mongoose");

// async function connectDB(){
// const uri =
//     "mongodb+srv://crud:Ufi6KbAaCuzbaTbO@cluster0.vm92yrn.mongodb.net/crud?appName=Cluster0";
// if (!uri){
//     throw new Error("URI missing");
// }
// try {
//     await mongoose.connect(uri);
//     console.log("MongoDB Connected");
// }catch(err){
//     console.error("MongoDB connection failed:",err.message);
//     process.exit(1);
// }
// }