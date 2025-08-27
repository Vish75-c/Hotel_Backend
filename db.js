//basic template for connecting mongodb database with the node js
import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/hotels',{
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
