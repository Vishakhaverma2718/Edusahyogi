import mongoose from "./connection.js";

const msgSchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        // lowercase: true,
    },
    subject:{
        type : String,
    },
    msg :{
        type : String ,
        required : true
    },
    
});

export const msg = mongoose.model("msg",msgSchema);