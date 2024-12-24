import userModel from "../models/usermodel.js"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const createtoken =(id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
// routes for user login
const loginuser = async ( req,res) => {
    try {
        const {email,password}= req.body

        const user = await userModel.findOne({email})

        if (!user) {

            return res.json({success:false,message:"user does not exit"})
            
        }
        const ismatch = await bcrypt.compare(password, user.password)

        if (
            ismatch
        ) {
            const token = createtoken(user._id)
            res.json({success:true,token

            })
            
        }
        
        else{
            res.json
({success:false, message:"invalid password"})        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message}   )

    }

}



// routes for user registrration

const registeruser = async ( req,res) =>{
    try {
        const {name,email,password}= req.body

        const exist = await userModel.findOne({email})

        if (exist) {

            return res.json({success:false,message:"user already exist"})
            
        }
        //  validating email and strong password

        if (!validator.isEmail(email)) {
            
            return res.json({success:false,message:"please enter a valid email"})
            
        }
        if (password?.length < 8) {
            
            return res.json({success:false,message:"please enter a strong password "})
            
        }

        // hashing users password

        const salt = await bcrypt.genSalt(10)

        const hashedpassword = await bcrypt.hash(password,salt)

        const newuser = new userModel({
            name,
            email,
            password:hashedpassword
        })

        const user = await newuser.save()

        const token = createtoken(user._id)

        res.json({success:true,token})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message}   )
    }

}


// routes for adimn login

const adminelogin = async (req,res) =>{
    try {
        
        const {email,password}  = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            
            res.json({success:true,token})

            
        } else{
            res.json({success:false,message:"not admin"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message}   )
        
    }

}

export {loginuser,registeruser, adminelogin}