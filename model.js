import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    employee_id:
    {
        type:String,
        required:true,
        unique:true
    },
    first_name: {
        type:String,
        required:true,

    },
    last_name: {
        type:String,
        required:true,
    },
    department: {
        type:String,
        required:true,
     
    },
    Address: {
        type:String,
        required:true,
        
    },
    hire_date: {
        type:String,
        default:new Date(Date.now())
        
    },
    dob: {
        type:String,
        required:true,
       
    },
    joiningDate: {
        type:String,
        default:new Date(Date.now())
      
    },
    salary: {
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    }
}

)

export const  Employee = mongoose.model("Employee", userSchema)