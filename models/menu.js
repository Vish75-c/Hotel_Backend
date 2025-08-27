import mongoose from "mongoose";

const menuschema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','sour','spicy'],
        required:true
    },
    isdrink:{
        type:[Boolean],
        required:true
    },
    sales:{
        type:Number,
        default:0
    }
})

const menuModel=mongoose.model('items',menuschema);
export default menuModel;