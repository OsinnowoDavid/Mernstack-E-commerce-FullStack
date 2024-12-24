import jwt from "jsonwebtoken"
const authuser = async (req,res) =>{

    const {token} = req.headers

    if (!token) {
        return res.json({success:false, message: "not authorized"})
    }
    try {
       const token_decoded= jwt.verify(token, process.env.JWT_SECRET) 
       req.body.userId = token_decoded.userId
       next()
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

export default authuser