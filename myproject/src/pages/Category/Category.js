import React from 'react'
// import classes from "../pages/categories.module.css"
import { Link } from 'react-router-dom';
import cat from "../../assests/images/bag.jpeg"
import { useQuery } from 'react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { useShopContext } from "../../content.js"
// if(data){
//   console.log(data)
// }
function Category() {

  const { backendUrl } = useShopContext();
  const{isLoading,data,loading ,error} = useQuery("fecthcate",() =>{
    return axios.get(`${ backendUrl}/api/category/getcactegory`)

  })
  
if(error){
  console.log(error.message)
}

if(isLoading){
  return(
  <div className="text-center text-gray-500">
    Loading...
  </div>)
  
}

   if(data){
{console.log(data)  }

   } 
    

return(
  <>
  <div className='mt-10 ml-10 mr-10 grid grid-cols-5 gap-4'>
    
  { 
  data?.data?.categoryproduct?.map((items) => (


<div key={items.id} className='bg-cover bg-center rounded-lg border border-teal-700 mb-8 p-4' >
 <Link to={`/Categorylist/:id${items.id}`} className='block'>
<div className='w-full h-40 flex flex-col items-center'>
  
<h1 className='text-center font-bold mt-3'>{items.name}</h1>
<img className='object-cover mt-1 w-full h-32' src={items.image} alt="category"></img>
{/* <h1>{items.image}</h1> */}
</div>
</Link>


{console.log(data)}
</div>

  ))
}

</div> 
</>
)}
  

  



export default Category
