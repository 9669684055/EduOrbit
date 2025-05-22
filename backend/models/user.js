const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

const userSchema= new Schema ({
    name: {
        type:String
    }
    
})