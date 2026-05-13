const mongoose  = require("mongoose");

const internSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true
    },
    verificationCode:{
        type:String,
        required:true,
        unique:true
    }},{timestamps:true})

const Intern = mongoose.model("Intern", internSchema);
module.exports=Intern;