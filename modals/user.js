import mongoose from "./connection.js";

const userSchema = mongoose.Schema({
    username: {
        type : String,
        required : true
    },
    schoolname:{
        type : String,
        required : true,
        // lowercase: true,
    },
    mobilenumber:{
        type : Number,
        required : true
    },
    whatsappnumber :{
        type : Number ,
        required : true
    },
    Atrnativenumber :{
        type : Number,
        required : true
    },
    tennumber :{
        type : String,
        required : true
    },
    twelvenumber :{
        type : String,
        required : true
    },
    city :{
        type : String
    },
    category :{
        type : String,
        required : true
    },
    course :{
        type : String
    }
});

export const user = mongoose.model("user",userSchema);