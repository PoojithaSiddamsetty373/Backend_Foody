<<<<<<< HEAD
const Vendor=require("../models/Vendor")
const jwt= require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const dotenv = require ("dotenv");

dotenv.config();

const secretKey = process.env.WhatIsYourName


const vendorRegister=async(req,res)=>{
    const {username,email,password} =req.body
    try{
         const vendorEmail = await Vendor.findOne({email});
         if (vendorEmail){
            return res.status(400).json("Email already excisted" )
         }
         const hashedpassword =await bcrypt.hash(password,10);
         const newVendor = new Vendor({
            username,
            email,
            password:hashedpassword
         });
         await newVendor.save();
         res.status(200).json({message:"Vendor registered Successfully"});
         console.log("Registered")
    }
    catch(error){
         console.error(error);
        res.status(500).json({error:"Internal Server"})
    }
}

const vendorLogin=async(req,res)=>{
    const {email,password} =req.body
    try{
        const vendor = await Vendor.findOne({email});
        if(! vendor || !(await bcrypt.compare(password,vendor.password))){
            return res.status(401).json(({error:"Invalid Username or Password"}))
        }

        const token = jwt.sign({vendorId:vendor._id},secretKey,{expiresIn:"1h"})
        res.status(200).json({success:"Login Successful",token})
        console.log(email,"this is token",token);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'})

    }
}
const getAllVendors = async(req,res)=>{
    try{
       const vendors = await Vendor.find().populate('firm');
       res.json({vendors})
    }
   catch(error){
    console.log(error);
     res.status(500).json({error:'internal server error'})
   }
}
const getVendorById =async(req,res)=>{
  
    try{
    const vendorId = req.params.apple;
    const vendor =  await Vendor.findById(vendorId).populate('firm');
    if(!vendor){
         return res.status(404).json({error:"Vendor not found"})

    }
    res.status(200).json({vendor})
    }
    catch(error){
  console.log(error);
     res.status(500).json({error:'internal server error'})
   
    }
}






=======
const Vendor=require("../models/Vendor")
const jwt= require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const dotenv = require ("dotenv");

dotenv.config();

const secretKey = process.env.WhatIsYourName


const vendorRegister=async(req,res)=>{
    const {username,email,password} =req.body
    try{
         const vendorEmail = await Vendor.findOne({email});
         if (vendorEmail){
            return res.status(400).json("Email already excisted" )
         }
         const hashedpassword =await bcrypt.hash(password,10);
         const newVendor = new Vendor({
            username,
            email,
            password:hashedpassword
         });
         await newVendor.save();
         res.status(200).json({message:"Vendor registered Successfully"});
         console.log("Registered")
    }
    catch(error){
         console.error(error);
        res.status(500).json({error:"Internal Server"})
    }
}

const vendorLogin=async(req,res)=>{
    const {email,password} =req.body
    try{
        const vendor = await Vendor.findOne({email});
        if(! vendor || !(await bcrypt.compare(password,vendor.password))){
            return res.status(401).json(({error:"Invalid Username or Password"}))
        }

        const token = jwt.sign({vendorId:vendor._id},secretKey,{expiresIn:"1h"})
        res.status(200).json({success:"Login Successful",token})
        console.log(email,"this is token",token);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'})

    }
}
const getAllVendors = async(req,res)=>{
    try{
       const vendors = await Vendor.find().populate('firm');
       res.json({vendors})
    }
   catch(error){
    console.log(error);
     res.status(500).json({error:'internal server error'})
   }
}
const getVendorById =async(req,res)=>{
  
    try{
    const vendorId = req.params.apple;
    const vendor =  await Vendor.findById(vendorId).populate('firm');
    if(!vendor){
         return res.status(404).json({error:"Vendor not found"})

    }
    res.status(200).json({vendor})
    }
    catch(error){
  console.log(error);
     res.status(500).json({error:'internal server error'})
   
    }
}






>>>>>>> f53529387ea08cb9fd5daa3dffb051c627f4ee11
module.exports ={vendorRegister,vendorLogin,getAllVendors,getVendorById}