const mongoose = require('mongoose');


const SchemaFeedback = new mongoose.Schema({
    UserId:{
        type:String,
        require:true
    },
    Questions:{
        type :String,
        required:true
    },
    Answers:{
        type :String,
        required:true
    },
   
})

const  Feedbacks = mongoose.model("Feedbacks",SchemaFeedback);
module.exports = Feedbacks;
