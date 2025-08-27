//basic template for connecting mongodb database with the node js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})
const url=process.env.Mongo_URL;
mongoose.connect("mongodb+srv://vishgola191:Atlas123@cluster0.azzcxju.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db=mongoose.connection;
db.on('connected',()=>{
    console.log("Connected to the server");
})
db.on('disconnected',()=>{
    console.log("disconnneted form the server");
})
db.on('error',()=>{
    console.log('Error Connecting')
})

export default db;
