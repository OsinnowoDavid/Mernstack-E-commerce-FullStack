import React from 'react'
// import classes from "../pages/categories.module.css"
import { Link } from 'react-router-dom';
import cat from "../../assests/images/bag.jpeg"
import { useQuery } from 'react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// if(data){
//   console.log(data)
// }

function Category() {
  const{isLoading,data,loading ,error} = useQuery("fecthcate",() =>{
    return axios.get("http://localhost:4000/api/category/getcactegory")

  })
  
if(error){
  console.log(error.message)
}

if(isLoading){
  return(
  <div>{}
    loading
  </div>)
}

    
    

return(
  <>
  <div className='mt-10 ml-10 mr-10 grid grid-cols-5'>
    
  { 
  data?.data.product.map((items) => (


<div key={items.id} className='bg-[url("C:\Users\USER\Desktop\hackaton\backend\Full-stack-e-commerce-project\frontend\my-app\src\assests\images\pattner.JPG")] w-48    bg-cover bg-center rounded-lg border-1 border-teal-700 mb-8 ml-5' >
 <Link to={`/Categorylist/:id${items.id}`} className=''>
<div className=' w-16 gap-1 h-40  '>
  
<h1 className='ml-20 font-bold mt-3'>{items.name}</h1>
<img className=' object-cover mt-1 ml-16 w-72 mb-5 ' src={items.image} alt="category"></img>
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
