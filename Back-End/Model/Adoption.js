const mongoose = require ('mongoose');
const {ObjectId} = mongoose.Schema;
const pawBaskertSchema = new mongoose.Schema({
    paw:{
        type: ObjectId,
        ref: "Paw"
    },
    status:{
        type: String,
        required: true,
        default: "Application is in Queue",
        enum:["Application is in Queue","Address verification pending","User identification documents pending",
        "Verification is in progress","Verification completed", "Nominations closed"]
//verification of address under process
}})



const adoptionSchema = new mongoose.Schema({
     Paw:[pawBaskertSchema],    
     updated : Date,
    
    visitUs:{
        type: Date,
        default: "Date will be updated after verification process",

    },
     user:{
         type:ObjectId,
         ref : "User"
     }});