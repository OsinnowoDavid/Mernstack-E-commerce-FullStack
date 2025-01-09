import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import classes from "../assests/auth.module.css"
import Message from '../pages/Message'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useShopContext } from '../content'
function Login() {
  
const {backendUrl} = useShopContext()
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
    const response = await axios.post(`${backendUrl}/api/user/login`,values)
    if (response.status === 201){
      toast.success("Login successful!");
      navigate("/preview/:heroid")
      // localStorage.setItem("token", response.data.token)
      
    }
    // navigate("/")

    } catch(err){
      toast.error("Login failed. Please try again.");
  console.log(err )}

 }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
      <div className='bg-white p-10 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Login Form</h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block text-gray-700 mb-2'>Email</label>
            <input
              type="email"
              placeholder='Valid Email'
              className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='email' trim onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='block text-gray-700 mb-2'>Password</label>
            <input
              name='password' trim onChange={handleChange}
              className='form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              type='password' placeholder='Please use a strong Password'
              required
            />
          </div>
          <button type='submit' className='w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'>Submit</button>
          <div className='text-center text-gray-600 mt-4'>
            <span>Or</span>
          </div>
          <div className='text-center'>
            <Link to="/register" className='text-blue-500 hover:underline'>Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
