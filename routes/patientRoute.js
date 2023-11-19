
const express=require("express");
const patientSchema=require("../models/model2.js");
const patientRoute=express.Router();
const jwt=require("jsonwebtoken");
const middleware=require("../middleware.js");
const mongoose=require("mongoose");
patientRoute.post("/sign-uppatient",async(req,res)=>
{
    try{
        const{name,email,password}=req.body;
        let exist=await patientSchema.findOne({email})
        if(exist)
        {
            return res.status(400).send("User exists")
        }
        let newUser=new patientSchema({
            name,
            email,
            password
            
        })
        await newUser.save();
        res.status(200).send("registered sucessfully")

    }
    catch(err)
    {
        console.log(err)
        return res.status(500).send("Internal server error")

    }
})
patientRoute.post("/patient-login",async(req,res)=>
{
    try{
        const{email,password}=req.body;
        let exist=await patientSchema.findOne({email});
        if(!exist)
        {
            return res.status(400).send("user not found");
        }
        if(exist.password!==password)
        {
            return res.status(400).send("Invalid Credentials");
        }
       
        let payload={
            user:{
                id: exist.id
            }
        }
        jwt.sign(payload,"secret",{expiresIn:3600000},
        (err,token)=>{
            if(err) throw err;
            return res.json({token})
        }
        )
    }
    catch(err){
        console.log(err);
        return res.status(500).send("server error")

    }
})
patientRoute.get("/patient-dashboard",middleware,async(req,res)=>{
    try{
        let exist =await patientSchema.findById(req.user.id);
        if(!exist){
            return res.status(400).send("user not found");
        }
        res.json(exist);

    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send("Server error")
    }
})
module.exports=patientRoute;