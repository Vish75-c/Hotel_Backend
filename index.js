import express from "express";
import db from "./db.js";
import { urlencoded } from "express";
import PersonRouter from "./routes/person.js";
import MenuRouter from "./routes/list.js";
import passport from "./midddleware/auth.js";

import dotenv from "dotenv";
dotenv.config();const PORT=process.env.PORT||3000;
const app=express();
app.use(express.json());
app.use(express.urlencoded());
app.use(passport.initialize());
const authmidddleware=passport.authenticate('local',{session:false});
app.post('/',authmidddleware,(req,res)=>{
    res.status(200).json({Message:'user authenticated'});
})

app.use('/menu',MenuRouter);
app.use('/person',PersonRouter);
app.listen(PORT,function(err){
    if(err)console.log("Server Not running")
    else console.log("Server is Running");
})

