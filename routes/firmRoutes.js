<<<<<<< HEAD
const express = require ("express");
const firmController = require("../controllers/firmController");
const verifyToken=require("../middileware/verifyToken");

const router=express.Router();
router.post("/add-firm",verifyToken,firmController.addFirm);

router.get("/uploads/:imageName",(req,res)=>{
    const imageName=req.params.imageName;
    res.headersSent('Content-Type',"image/jpeg");
    res.sendFile(Path.join(__dirname, "..",'uploads',imageName));
});

router.delete("/:firmId",firmController.deleteFirmById);
=======
const express = require ("express");
const firmController = require("../controllers/firmController");
const verifyToken=require("../middileware/verifyToken");

const router=express.Router();
router.post("/add-firm",verifyToken,firmController.addFirm);

router.get("/uploads/:imageName",(req,res)=>{
    const imageName=req.params.imageName;
    res.headersSent('Content-Type',"image/jpeg");
    res.sendFile(Path.join(__dirname, "..",'uploads',imageName));
});

router.delete("/:firmId",firmController.deleteFirmById);
>>>>>>> f53529387ea08cb9fd5daa3dffb051c627f4ee11
module.exports=router;