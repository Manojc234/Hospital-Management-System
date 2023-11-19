const mongoose=require("mongoose");
const adminSchema=new mongoose.Schema({
    email:{type:String,
        required:true,
        unique:true},
    password:{type:String,
        required:true
    },
},{
    collection:"admin"
}
)
module.exports=mongoose.model("adminSchema",adminSchema);