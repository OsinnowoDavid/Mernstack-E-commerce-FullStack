import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import classes from "../assests/auth.module.css"
function Register() {

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
    const response = await axios.post("http://localhost:4000/api/user/register",values)
    if (response.status ===201 ){
      navigate("/Login")
    }
    } catch(err){
  console.log(err.message)}

 }

  return (
  <div className='justify-items-center pb-32 bg-slate-300 border-s-violet-300 rounded-xl'>
    <h1 className='text-white pt-20 mb-10 font-bold'>Login Form</h1>
    <form className='justify-items-center w-96 pb-96 pt-16 border-x-teal-50 bg-white'>
      <div>
        <label className='mb-2'>Name</label><br />
        <input
          type="text"
          placeholder='Your Full Name'
          className="form-control border-spacing-10 mb-10 w-72 h-10 p-1 focus:bg-amber-400"
          name='name'
          onChange={handlechange}
          required
        />
      </div>
      <div>
        <label className='mb-2'>Email</label><br></br>
        <input
          type="email"
          placeholder='Valid Email'
          className="form-control border-spacing-10 mb-10 w-72 h-10 p-1 focus:bg-amber-400 "
          name='email' trim onChange={handlechange}
          required
        />
     
      </div>
                
      <div>
        <label className='mb-2'>Password</label><br></br>

      <input name='password' trim onChange={handlechange} className=' form-control mb-10 w-72 h-10 p-1 focus:bg-amber-400' type='Password' placeholder='Please use a strong Password'></input>
      </div>

      <h1>Or</h1>

      <div className='grid grid-cols-2 gap-5'>

      <button onClick={handlesumit} className='hover:bg-green-500'>Submit</button>
      
      <h1>   
      <Link className='' to="/login">
      already have Account? login

      </Link></h1>

      <hr className=''></hr>
      </div>

      
      <h1>Or Sign up with </h1>
      
    </form>
    <hr></hr>
  </div>

  )
}

export default Register
