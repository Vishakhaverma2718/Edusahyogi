import { user } from "../modals/user.js";
import {msg} from "../modals/msg.js";

export const addUser = async(req,res)=>{
    try{
        const{username,schoolname,mobilenumber,whatappnumber,alternumber,tenpercante,twelthpercante,city,category,course} = req.body;

        const data = new user({
            username : username,
            schoolname : schoolname,
            mobilenumber : mobilenumber,
            whatsappnumber : whatappnumber,
            Atrnativenumber : alternumber,
            tennumber : tenpercante, 
            twelvenumber : twelthpercante,
            city :city,
            category : category,
            course : course
        });
        await data.save();
        res.render("pricelist");
    }catch(error){
        res.render("index");
    }
}

export const sendMsg = async(req,res)=>{
    try{
        const{name,email,subject,message} = req.body;
        const msgdata = new msg({
            name : name,
            email : email,
            subject : subject,
            msg : message
        });
        await msgdata.save();
    }catch(error){
        res.render("index");
    }
}