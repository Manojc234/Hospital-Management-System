const mongoose=require('mongoose');
const detailsSchema=new mongoose.Schema({
    first_name:
    {type:String,
    required:true
    },
    last_name:
    {type:String,
    required:true
    },
    email:
    {type:String,
    required:true,
    unique:true
    },
    dob:
    {type:String,
    required:true
    },
    gender:
    {type:String,
    required:true
    },
    appointment_date:
    {type:String,
    required:true
    },
    doctor_specialization:
    {type:String,
        required:true
    },
    description:
    {type:String,
    required:true
    },
    status:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending"

    }

},{
    collection:"patient_details"
})
module.exports=mongoose.model("detailsSchema",detailsSchema)