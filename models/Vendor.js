<<<<<<< HEAD
const mongoose=require("mongoose");
const vendorSchema = new mongoose.Schema({
   username:{
     type:String,
     required:true
   },
      email:{
     type:String,
     required:true,
     unique:true
   },
      password:{
     type:String,
     required:true
   },
   firm:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Firm'
    }
   ]
});
const Vendor=mongoose.model('Vendor',vendorSchema);
module.exports = Vendor;

=======
const mongoose=require("mongoose");
const vendorSchema = new mongoose.Schema({
   username:{
     type:String,
     required:true
   },
      email:{
     type:String,
     required:true,
     unique:true
   },
      password:{
     type:String,
     required:true
   },
   firm:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Firm'
    }
   ]
});
const Vendor=mongoose.model('Vendor',vendorSchema);
module.exports = Vendor;

>>>>>>> f53529387ea08cb9fd5daa3dffb051c627f4ee11
