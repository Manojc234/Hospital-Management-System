
const express=require("express");
const adminSchema=require("../models/model4.js");
const doctorSchema=require("../models/model1.js");
const adminRoute=express.Router();
const jwt=require("jsonwebtoken");
const middleware=require("../middleware.js");
const mongoose=require("mongoose");

adminRoute.post("/admin-login",async(req,res)=>
{
    try{
        const{email,password}=req.body;
        let exist=await adminSchema.findOne({email});
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
adminRoute.get("/admin-dashboard",middleware,async(req,res)=>{
    try{
        let exist =await adminSchema.findById(req.user.id);
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
/*adminRoute.put('/approve-doctor/:doctorId',middleware, async (req, res) => {
    try {
      const doctorId = req.params.doctorId;
      const approvedDoctor = await doctorSchema.findByIdAndUpdate(doctorId, { isApproved: true }, { new: true });
      if (!approvedDoctor) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
      res.json({ message: 'Doctor approved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });*/
module.exports=adminRoute;