<<<<<<< HEAD
const vendorController=require("../controllers/vendorController");
const express =require("express");



const router=express.Router();
router.post('/register',vendorController.vendorRegister);
router.post('/login',vendorController.vendorLogin);
router.get('/all-vendors', vendorController.getAllVendors);
router.get("/single-vendor/:apple",vendorController.getVendorById);
=======
const vendorController=require("../controllers/vendorController");
const express =require("express");



const router=express.Router();
router.post('/register',vendorController.vendorRegister);
router.post('/login',vendorController.vendorLogin);
router.get('/all-vendors', vendorController.getAllVendors);
router.get("/single-vendor/:apple",vendorController.getVendorById);
>>>>>>> f53529387ea08cb9fd5daa3dffb051c627f4ee11
module.exports= router;