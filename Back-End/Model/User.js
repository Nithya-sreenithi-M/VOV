const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require('crypto');
const uuidv1 = require("uuid/v1");
const userSchema = new Schema({
    fullName: {
        type: String, 
        required: true,
        maxlength: 32,
        trim: true
      },
      email: {
        type: String,
        trim: true,
        required: true,
        unique: true
      },
      mobileNumber:{
        type:Number,
        maxlength: 10,
        unique:true,
        required: true
      },
      encry_password: {
        type: String,
        require: true
      },
      salt: String,
      role: {
        type: Number,
        default: 0
      },
      address : {
        type: String,
        require: true
      },
      adoptionlist: {
        type: Array,
        default: []
      },
      verifiedUser:{
        type: String,
        default:"Not Verified",
        enum: ["Verified", "Not Verified"]
     
      },
      userinfo: {
        type: String,
        trim: true
      },
      idPhoto:{
        data : Buffer,
        contentType : String
    },
}, {timestamps:true});

userSchema.virtual('password')
  .set(function(password){
    this._password = password; //private variable
    this.salt = uuidv1();
    this.encry_password = this.securePassword(this._password);
  })
  .get(()=>{
    return this._password;
  })



userSchema.method ={
  authenticate:function(plainpassword)
  {
    return this.securePassword(plainpassword) === this.encry_password
    //to check sign in
  },

    securePassword : function(plainpassword){
        //check this in teetopia
        if(!plainpassword) return"";
        try {
            //(Hash-based Message Authentication Code
            return crypto.createHmac('sha256',this.salt)
                .update(plainpassword)
                .digest('hex')
        } catch (error) {
            return "error in password encryption";
        }
    }
}

module.exports = mongoose.model("User", userSchema);