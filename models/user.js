//basic template for creating schemas;
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userschema=mongoose.Schema({
    user:{
        type:String,
        required:true,
    },
    age:{
        type:String,
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],
    },
    mobile:{
        type:Number,
        unique:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userschema.pre('save',async function (next) {
    const person=this;
    try{
        if(!person.isModified('password'))return next();
        const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(person.password,salt);
        person.password=hashpassword;
        next();
    }catch{
        return next;
    }
})
const userModel=mongoose.model('person',userschema);
export default userModel;