//basic template for connecting mongodb database with the node js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url=process.env.Mongo_URL;
const local_url=process.env.Mongo_URL_Local;
mongoose.connect(local_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db=mongoose.connection;
db.on('connected',()=>{
    //console.log(url);
    console.log("Connected to the server");
})
db.on('disconnected',()=>{
    console.log("disconnneted form the server");
})
db.on('error',()=>{
    console.log('Error Connecting')
})

export default db;
