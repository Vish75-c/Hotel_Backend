//basic template for creating schemas;
import mongoose from "mongoose";
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
    }
})
const userModel=mongoose.model('person',userschema);
export default userModel;