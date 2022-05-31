const mongoose = require("mongoose");

const PostScehma = mongoose.Schema({
    studentId:{
        type:String,
        required: true,
    },
    studentName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,  
    },
    phone:{
        type:Number,
        required:true,
    },
    specialization:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("Members", PostScehma);
