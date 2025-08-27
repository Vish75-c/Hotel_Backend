import { Router } from "express";
import express from "express";
import userModel from "../models/user.js";
const router=Router();
router.post('/',async (req,res)=>{
    try{
        const user=req.body;
        const person=new userModel(user);
        
        const response=await person.save();
        console.log("User Create");
        res.status(200).json(response);
    }catch(err){
        console.log(`User Not created`)
        res.status(502).json({error:err});
    }
})
router.get('/:user',async (req,res)=>{
    try{
        const usertype=req.params.user;
        if(usertype=='waiter'||usertype=='chef'||usertype=='manager'){
            const person=await userModel.find({work:usertype});
            res.status(200).json(person);
        }else{
            res.status(404).json({error:"Invalid work field"});
        }
    }catch(err){
        console.log("user not found in the database");
        res.send(500).json({error:err});
    }
})
export default router;