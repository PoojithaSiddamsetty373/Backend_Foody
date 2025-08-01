<<<<<<< HEAD
const mongoose= require("mongoose")
const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
     price:{
        type:String,
        required:true
    },
       category:{
        type:[
            {
                type:String,
                enum:['veg','non-veg']
            }
           ]
      
    },
    image:{
        type:String,
        
      },
    bestSeller:{
        type:String,
       
    },
     description:{
        type:String,
        
    },
    firm:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Firm'
    }]
})
const Product=mongoose.model("Product",productSchema);
=======
const mongoose= require("mongoose")
const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
     price:{
        type:String,
        required:true
    },
       category:{
        type:[
            {
                type:String,
                enum:['veg','non-veg']
            }
           ]
      
    },
    image:{
        type:String,
        
      },
    bestSeller:{
        type:String,
       
    },
     description:{
        type:String,
        
    },
    firm:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Firm'
    }]
})
const Product=mongoose.model("Product",productSchema);
>>>>>>> f53529387ea08cb9fd5daa3dffb051c627f4ee11
module.exports = Product