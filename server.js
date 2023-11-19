const express=require("express");
const app=express();
const mongoose=require("mongoose");
const doctorRoute=require("./routes/doctorRoute");
const patientRoute=require("./routes/patientRoute");
const patientDetails=require("./routes/patientDetails");
const adminRoute=require("./routes/adminRoute");

const cors=require("cors");
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test:12345@cluster0.wutvxcn.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>console.log("connected to DB"));
db.on("err",()=>console.log("error occurred"));
app.use(express.json());
app.use(cors({origin:"*"}))
/*app.post("/sign-updoctor",async(req,res)=>
{
    try{
        const{name,email,password}=req.body;
        let exist=await loginSchema.findOne({email})
        if(exist)
        {
            return res.status(400).send("User exists")
        }
        let newUser=new loginSchema({
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
app.post("/doctor-login",async(req,res)=>
{
    try{
        const{email,password}=req.body;
        let exist=await loginSchema.findOne({email});
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
app.get("/doctor-dashboard",middleware,async(req,res)=>{
    try{
        let exist =await loginSchema.findById(req.user.id);
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
*/
/*app.post("/sign-uppatient",async(req,res)=>
{
    try{
        const{name,email,password}=req.body;
        let exist=await loginSchema2.findOne({email})
        if(exist)
        {
            return res.status(400).send("User exists")
        }
        let newUser=new loginSchema2({
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
app.post("/patient-login",async(req,res)=>
{
    try{
        const{email,password}=req.body;
        let exist=await loginSchema2.findOne({email});
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
app.get("/patient-dashboard",middleware,async(req,res)=>{
    try{
        let exist =await loginSchema2.findById(req.user.id);
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
*/
/*app.post("/patient-appointment",(req,res)=>
{
    detailsSchema.create(req.body,(err,data)=>
    {
        if(err)
        return err;
        else
        res.json(data).status(200).send("appointment submitted");
    })
})
app.get("/",(req,res)=>
{
    detailsSchema.find(req.body,(err,data)=>
    {
        if(err)
        return err;
        else
        res.json(data).status(200);
    })
})
app.route("/update-appointment/:id").get((req,res)=>
{
    detailsSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>
    {
        if(err)
        return err;
        else
        res.json(data);
    })
}).put((req,res)=>{
    detailsSchema.findByIdAndUpdate
    (mongoose.Types.ObjectId(req.params.id),
    
        {$set:req.body},
        (err,data)=>{
            if(err)
            return err;
            else
            res.json(data).send("updated");
        }
    )
})
app.delete("/delete-patient/:id",(req,res)=>
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
*/
app.use(
    express.urlencoded({ extended: true })
);
app.use("/patientRoute",patientRoute);
app.use("/doctorRoute",doctorRoute);
app.use("/adminRoute",adminRoute);
app.use("/patientDetails",patientDetails);
app.listen(4000,()=>{
    console.log("Server strated at 4000");
}
)