import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato)=>{
    console.log("Server connecting to the data base successfuly");
}).catch((error)=>{
    console.log("Impossible to establish connection with the database: ", error);
})