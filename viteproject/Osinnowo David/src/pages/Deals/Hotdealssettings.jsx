import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { useShopContext } from '../../content'
function HotDealSettings () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

const {backendUrl} = useShopContext()
  const {isloading, error, data} = useQuery("edite$delet" , ()=>{
    return axios.get(`${backendUrl}/api/hotprducts/listhotproducts`)
})
if (isloading){
    return(
toast("data loading")
)}
if (error){
    return (
        toast("error")
    )
}


const deleteProduct = async (id) => {
  if (!window.confirm("Are you sure you want to delete this product?")) return;

  setLoading(true);
  try {
    const response = await axios.delete(`/api/hotprduct/removehotproducts${id}`); // Adjust your API URL
    if (response.data.success) {
      (products.filter((product) => product.id !== id));
      alert("Product deleted successfully!");
    } else {
      alert(response.data.message);
    }
  } catch (err) {
    console.error("Error deleting product:", err);
    alert("Failed to delete product.");
  }
  setLoading(false);
};

{console.log(data)}
  return (

    <div>
        <div className='ml-10'>
<Link  to="/AddProduts">

<button type='butten'>Add New Items</button>
</Link>
    </div>
        
    {
        data?.data.hotproducts.map((chnage) =>(

  
    <div key={chnage}>
      <div>
        <ul className="ml-20 mr-20 mt-20  bg-slate-100 pl-10 pt-5 pb-5 pr-10 rounded-xl ">
            <li> <img className='w-20' src={chnage.image[0]}></img> </li>
            <li>  <div>{chnage.name}</div>
            <div className='mt-1 mb-1 text-green-500 font-bold'>Active</div> 
            <ul className='gap-10'>

                <li>
                  <Link to={`/updatehotdeal/${chnage._id}`}>
                  
                  <button className='hover:bg-green-700'>Edit</button>
                  </Link>
                </li>
                
                <li>
                  <Link to={`/update/${chnage._id}`} onClick={deleteProduct}>
                  
                  <button   className='hover:bg-red-700'>Delete</button>
                  
                  </Link>
                </li>
                <li>
                    <button className='hover:bg-black'>Deactive</button>
                </li>

            </ul>
            </li>
        </ul>
      </div>
    </div>
      ))}
      
    </div>
  )
}


export default HotDealSettings
