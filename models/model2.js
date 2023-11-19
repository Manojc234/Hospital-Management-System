const mongoose=require("mongoose");
const patientSchema=new mongoose.Schema({
    name:{type:String,
         required:true
        },
    email:{type:String,
        required:true,
        unique:true},
    password:{type:String,
        required:true
    },
    
},{
    collection:"patient"
}
)
module.exports=mongoose.model("patientSchema",patientSchema);