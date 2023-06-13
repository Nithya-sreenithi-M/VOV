const mongoose = require('mongoose')
const ObjectId = mongoose.Schema;
const donationSchema = new mongoose.Schema({
    user:{
        type:ObjectId,
        ref: "User"
    },
    transactionId:{},
    amount:{type:Number}    
});

module.exports = mongoose.model("Donation", donationSchema);