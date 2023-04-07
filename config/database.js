import mongoose from "mongoose"

export const connectDatabase = () =>{
    mongoose.connect("mongodb://localhost:27017/SenwellDb")
    .then(()=> console.log("mongodb is connected"))
    .catch((err)=> console.log(err.message))
}
