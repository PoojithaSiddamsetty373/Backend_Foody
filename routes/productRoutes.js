<<<<<<< HEAD
const express=require("express");
const {addProduct}=require("../controllers/productController");

const productController = require("../controllers/productController");
const router=express.Router();
router.post("/add-product/:firmId",addProduct);
router.get("/:firmId/products",productController.getProductByFirm);

router.get("/uploads/:imageName",(req,res)=>{
    const imageName=req.params.imageName;
    res.headersSent('Content-Type',"image/jpeg");
    res.sendFile(Path.join(__dirname, "..",'uploads',imageName));
});

router.delete("/:productId",productController.deleteProductById);
=======
const express=require("express");
const {addProduct}=require("../controllers/productController");

const productController = require("../controllers/productController");
const router=express.Router();
router.post("/add-product/:firmId",addProduct);
router.get("/:firmId/products",productController.getProductByFirm);

router.get("/uploads/:imageName",(req,res)=>{
    const imageName=req.params.imageName;
    res.headersSent('Content-Type',"image/jpeg");
    res.sendFile(Path.join(__dirname, "..",'uploads',imageName));
});

router.delete("/:productId",productController.deleteProductById);
>>>>>>> f53529387ea08cb9fd5daa3dffb051c627f4ee11
module.exports=router;