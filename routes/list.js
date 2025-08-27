import express, { json } from "express";
import menuModel from "../models/menu.js";
import { Router } from "express";
const MenuRouter=Router();

MenuRouter.post('/',async (req,res)=>{
    try{
        const item=req.body;
        const added=new menuModel(item);
        const response=await added.save();
        console.log('Menu item saved');
        res.status(200).json(response);
    }catch(err){
        console.log("Items not added in the database");
        res.status(502).json({error:err});
    }
})
MenuRouter.get('/:taste',async (req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste=='spicy'||taste=='sour'||taste=='sweet'){
            const response=await menuModel.findOne({taste:taste});
            if (!response) {
                return res.status(404).json({ error: "No item found with that taste" });
            }
            console.log('Data found in the database');
            res.status(200).json(response);
        }else{
            res.status(400).json({error:"Invalid Field"})
        }

    }catch(err){
        console.log("Items not added in the database");
        res.status(502).json({error:err});
    }
})
export default MenuRouter;