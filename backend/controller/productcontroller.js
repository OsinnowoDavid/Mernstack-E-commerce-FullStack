import {v2 as cloudinary} from "cloudinary"
import productmodel from "../models/productmodel.js"
// function for  add product

const addproduct = async (req,res)=>{
    try {
        const {name,description,category,subcategory,price,rate, bestseller  }= req.body
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image1[0]
        const image3 = req.files.image3 && req.files.image1[0]
        const image4 = req.files.image4 && req.files.image1[0]

        const  images = [image1,image2,image3,image4].filter((item) => item !== undefined)
        console.log( name,description,category,subcategory,price)
        let imageurl = await Promise.all(
            images.map(async (item) =>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:"image", 
                     background_removal: "cloudinary_ai"
                     })
                return result.secure_url
            })
        )
const productdata = {
    name,
    description,
    category,
    subcategory,
    price:Number(price),
    bestseller:bestseller === "true"? true:false,
    // size:JSON.parse(size),
    rate,
    image:imageurl,
    date:Date.now()
}
const product = new productmodel(productdata)
await product.save({succes:true,message:"product added"})
    } catch (error) {
        console.log(error)
        res.json({succes:false, message:error.message})
    }
}
const listproduct = async (req, res) => {
    try {
        // Fetch products with a query timeout of 7000 ms
        const products = await productmodel.find().maxTimeMS(7000);

        res.status(200).json({ success: true, products });
    } catch (error) {
        console.error(error);

        res.status(500).json({ success: false, message: error.message });
    }
};



const removeproduct = async (req,res)=>{
    try {

        await productmodel.findByIdAndDelete(req.body.id)
        res.json({succes:true,message:"product removed"})
        
    } catch (error) {
        console.log(error)
        res.json({succes:false, message:error.message})
    }
}

const singleproduct = async (req,res)=>{
    try {

        const {productid} = req.body
        const product = await productmodel.findById(productid)
        res.json({success:true,product})
        
    } catch (error) {
        
        console.log(error)
        res.json({succes:false, message:error.message})
    
    }
}

const cartdate = async ()=>{
    if (condition) {
        
    }
}

export {addproduct,listproduct,removeproduct,singleproduct}