import express from "express";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import userModel from "../models/user.js";
import bcrypt from "bcrypt";
passport.use(new LocalStrategy(async (username,password,done)=>{
    try{
        const user=await userModel.findOne({username:username});
        if(!user)return done(null,false,{message:'Something wend wrong'})
        const isMatch=await bcrypt.compare(password,user.password);
        if(isMatch)done(null,user);
        else return done(null,false,{message:'something went wrong'})
    }catch(err){
        return done(err);
    }
}))
export default passport;