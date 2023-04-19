const mongoose = require('mongoose');


const SchemaCart = new mongoose.Schema({
    UserId:{
        type:String,
        require:true
    },
    Name:{
        type :String,
        required:true
    },
    Description:{
        type :String,
        required:true
    },
    Price:{
        type :Number,
        required:true
    },
    Qty:{
        type:Number,
        required:true
    },
    Total:{
        type:Number,
        required:true
    }
})

const  Carts = mongoose.model("Carts",SchemaCart);
module.exports = Carts;
