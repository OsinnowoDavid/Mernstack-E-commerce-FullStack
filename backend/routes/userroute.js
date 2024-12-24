import express from "express"
import { loginuser,registeruser,adminelogin } from "../controller/usercontroller.js"

const userrouter= express.Router()

userrouter.post("/register",registeruser)
userrouter.post("/login",loginuser)
userrouter.post("/admin",adminelogin)

export default userrouter