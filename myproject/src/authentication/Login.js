import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import classes from "../assests/auth.module.css"
import Message from '../pages/Message'

function Login() {
  

const navigate = useNavigate()

   const [values, setValues] = useState({
    email: "",
    password: ""
   })
   const handleChange = (e)=>{
    setValues({...values,[e.target.name]:e.target.value})
    console.log(values)
   }
   axios.defaults.withCredentials = true;
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post("http://localhost:4000/api/user/login",values)
    if (response.status === 201){
      navigate("/preview/:heroid")
      // localStorage.setItem("token", response.data.token)
      
    }
    // navigate("/")

    } catch(err){
  console.log(err )}

 }

  return (
    
  <div className='justify-items-center pb-32 bg-slate-300 border-s-violet-300 rounded-xl xl:'>
    <h1 className='text-white pt-20 mb-10 font-bold className="form-group"form-group'>Login Form</h1>
    <form className='justify-items-center w-96 pb-96 pt-16  border-x-teal-50 bg-white'>
      <div  >
        <label className='mb-2'>Email</label><br></br>
        <input
          type="mail"
          placeholder='Valid Email'
          className="form-control border-spacing-10 mb-10 w-72 h-10 p-1 focus:bg-amber-400 "
          name='email' trim onChange={handleChange}
          required
        />
     
      </div>
      <div>
        <label className='mb-2'>Password</label><br></br>

      <input name='password' trim onChange={handleChange} className=' form-control mb-10 w-72 h-10 p-1 focus:bg-amber-400' type='Password' placeholder='Please use a strong Password'></input>
      </div>

      <h1>Or</h1>

      <div className='grid grid-cols-2 gap-5'>

      <button onClick={handleSubmit} className='hover:bg-green-500'>Submit</button>
      
      <h1>   
      <Link className='' to="/register">
      Create Account

      </Link></h1>

      <hr className=''></hr>
      </div>

      
      <h1>Or Sign up with </h1>
      
    </form>
    <hr></hr>
  </div>
  )
}

export default Login
