import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String ,Require:true},
    email:{type:String, require:true,unique:true},
    password:{type:String,require:true},
    cartdata:{type:Object,default:{}}

} ,{minimize:false})

const userModel = mongoose.model.user || mongoose.model("user",userSchema)

export default userModel