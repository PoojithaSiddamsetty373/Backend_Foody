const express = require ("express");//assigning pacakages express//
const dotenv = require ("dotenv");
const mongoose=require("mongoose");
const venderRoutes=require("./routes/vendorRoutes");
const bodyParser=require("body-parser");
const firmRoutes=require("./routes/firmRoutes");
const productRoutes=require("./routes/productRoutes");
const path= require('path');

const app= express()//inserting express into app//
const PORT=4000;

dotenv.config();//access values in .env//

mongoose.connect(process.env.MONGO_URI)
.then(()=> 
    console.log("Mongodb connected successfully!"))
.catch((error)=>
    console.log(error))
app.use(bodyParser.json())
app.use("/vendor",venderRoutes);
app.use("/firm",firmRoutes);
app.use("/product",productRoutes);
app.use("/uploads",express.static("uploads"));
//start the PORT//
app.listen(PORT,()=>{
    console.log(`server started and running at ${PORT}`);//it gives o/p//
})

//route//
app.use('/home',(req,res)=>{
    res.send("<h1> welcome t0 FOODY")
})