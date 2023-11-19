
const express=require("express");
const detailsSchema=require("../models/model3.js");
const patientDetails=express.Router();
const mongoose=require("mongoose");
patientDetails.get("/",(req,res)=>
{
    detailsSchema.find(req.body,(err,data)=>
    {
        if(err)
        return err;
        else
        return res.json(data).status(200);
    })
})
patientDetails.post("/patient-appointment",(req,res)=>
{
    detailsSchema.create(req.body,(err,data)=>
    {
        if(err)
        return err;
        else
        return res.json(data);
    })
})
patientDetails.route("/update-appointment/:id")
.get((req,res)=>
{
    detailsSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>
    {
        if(err)
        return(err);
        else
        res.json(data);
    })
}).put((req,res)=>{
    detailsSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    
        {$set:req.body},
        
        (err,data)=>{
            if(err)
            return err;
            else
            res.json(data);
        
        }
    )
})
patientDetails.delete("/delete-patient/:id",(req,res)=>
{
    detailsSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>
    {
        if(err)
        return err;
        else
        res.json(data).status(200);
    })
})
module.exports=patientDetails;