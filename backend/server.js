import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectdb from "./config/mongodb.js"
import connectcloudinary from "./config/cloudinary.js"
import userrouter from "./routes/userroute.js"
import productrouter from "./routes/productroute.js"
import cartroute from "./routes/cartroute.js"



// app config
dotenv.config()
const app = express()


const port = process.env.PORT
connectdb()
connectcloudinary()

// add midllewear
app.use(express.json())
app.use(cors())


// endpoint
app.use("/api/user",userrouter)
app.use("/api/product",productrouter)
app.use("/api/cart",cartroute)
app.listen(port, () => console.log({port})

)