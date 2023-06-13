const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;
console.log("CategoryObject Id", ObjectId)
const pawSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String,
            trim: true,
            maxlength: 32
        },
        
        description: {
            required: true,
            type: String,
            trim: true,
            maxlength: 100
        },
        location: {
            required: true,
            type: String,
            trim: true,
            maxlength: 64
        },
        category:{
            type: ObjectId,
            ref: "Realm",
            required: true

        },
        age:{
            type: number,
            trim: true,
            maxlength:2
        },
        photo:{
            data : Buffer,
            contentType : String
        },
        adoptionStatus:{
            type:Number, //0 open for adoption, 1 nomination is closed
            default: 0

        }
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Paw", PawSchema);