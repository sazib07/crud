const { default: mongoose } = require("mongoose")



const dbConfig = ()=>{
    mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.vm92yrn.mongodb.net/${process.env.DB_USER_NAME}?appName=Cluster0`).then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err.message)
    })
}

module.exports = dbConfig


//24m