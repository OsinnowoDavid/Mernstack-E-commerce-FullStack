import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import classes from "../assests/auth.module.css"
import { useShopContext } from '../content'
import { toast } from 'react-toastify'; // Add this import
import 'react-toastify/dist/ReactToastify.css'; // Add this import

function Register() {
  const {backendUrl} = useShopContext()
  const navigate = useNavigate()

  const [values, setvalues] = useState({
    name:"",
    email:"",
    password:""
  })

  const handlechange = (e)=>{
    setvalues({...values,[e.target.name]:e.target.value})
  }

  const handlesumit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/register`,values)
      if (response.status === 201) {
        toast.success('Registration successful!'); // Add this line
        navigate("/Login")
      }
    } catch(err){
      toast.error('Registration failed. Please try again.'); // Add this line
      console.log(err.message)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
      <div className='bg-white p-10 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Register Form</h1>
        <form onSubmit={handlesumit} className='space-y-6'>
          <div>
            <label className='block text-gray-700 mb-2'>Name</label>
            <input
              type="text"
              placeholder='Your Full Name'
              className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='name'
              onChange={handlechange}
              required
            />
          </div>
          <div>
            <label className='block text-gray-700 mb-2'>Email</label>
            <input
              type="email"
              placeholder='Valid Email'
              className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='email' trim onChange={handlechange}
              required
            />
          </div>
          <div>
            <label className='block text-gray-700 mb-2'>Password</label>
            <input
              name='password' trim onChange={handlechange}
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
            <Link to="/login" className='text-blue-500 hover:underline'>Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
