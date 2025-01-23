import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectdb from "../config/mongodb.js"
import connectcloudinary from "../config/cloudinary.js"
import userrouter from "../routes/userroute.js"
import productrouter from "../routes/productroute.js"
import cartroute from "../routes/cartroute.js"
import categoryrouter from "../routes/categoryroutes.js"
import flashproductroute from "../routes/flashproductroutes.js"
import hotproductroutes from "../routes/hotproductroutes.js"



// app config
dotenv.config()
const app = express()


const port = process.env.PORT
connectdb()
connectcloudinary()

// add midllewear
app.use(express.json())
app.use(cors({
    origin:["https://front111-e-commerce-full-stack-q3nw.vercel.app/"],
    methods:["GET", "POST","DELETE", "PUT"],
    credentials:true
}))
app.use(cookieParser())


app.get("/", (req,res) => {
    res.json ("hello")})
// endpoint
app.use("/api/user",userrouter)
app.use("/api/product",productrouter)
app.use("/api/cart",cartroute)
app.use("/api/category",categoryrouter)
app.use("/api/flashproduct",flashproductroute)
app.use("/api/hotprduct",hotproductroutes)
app.listen(port, 
)
