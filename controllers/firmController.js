const Firm=require("../models/Firm");
const Vendor=require("../models/Vendor");
const multer=require ("multer");

 const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory to save uploaded files
  },
  filename: function (req, file, cb) {
    // Rename the file to include the current timestamp
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload variable
const upload = multer({ storage: storage });



const addFirm=async(req, res)=>{
 try{
     const{firmName,area,category,region,offer,image}=req.body;
     

  const vendor = await Vendor.findById (req.vendorId);
  if (!vendor){
      res.status(404).json({message:"vendor not found"})
  }

  const firm = new Firm({firmName,area,category,region,
  offer,image,vendor:vendor?._id});
  const savedFirm = await firm.save();
  vendor.firm.push(savedFirm._id)
  await vendor.save();
   return res.status(200).json({message:"Firm added Successfully"})
 }
  catch(error){
         console.error(error);
        res.status(500).json({error:"Internal Server"})
    }
}
const deleteFirmById = async(req, res) => {
try {
    const firmId= req.params.firmId;
     const deletedFirm = await Firm.findByIdAndDelete (firmId);
   if (!deletedFirm) {
     return res.status(404).json({ error: "No product found" })}

} catch (error) {
   console.error(error);
   res.status(500).json({ error: "Internal server error" })

}
}
module.exports={addFirm:[upload.single('image'),addFirm],deleteFirmById}