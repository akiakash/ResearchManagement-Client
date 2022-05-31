const mongoose = require("mongoose");
const PostScehma = mongoose.Schema({

    studentName1:{
        type:String,
        required: true,
    },
    studentName2:{
        type:String,
        required: true,
    },
    studentName3:{
        type:String,
        required: true,
    },
    studentName4:{
        type:String,
        required: true,
    },
    studentId1:{
        type:String,
        required: true,
    },
    studentId2:{
        type:String,
        required: true,
    },
    studentId3:{
        type:String,
        required: true,
    },
    studentId4:{
        type:String,
        required: true,
    },
    Specialization1:{
        type:String,
        required: true,
    },
    Specialization2:{
        type:String,
        required: true,
    },
    Specialization3:{
        type:String,
        required: true,
    },
    Specialization4:{
        type:String,
        required: true,
    }
});


module.exports = mongoose.model("Students", PostScehma);