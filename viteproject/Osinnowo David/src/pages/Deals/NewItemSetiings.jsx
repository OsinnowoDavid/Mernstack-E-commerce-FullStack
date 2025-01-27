import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useShopContext } from '../../content';
function NewItemSetiings() {
const {id} = useParams()

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
const {backendUrl} = useShopContext()
  const { isLoading, error, data } = useQuery("edit&delete", () => {
    return axios.get(`${backendUrl}/api/products/list`);
  });

  if (isLoading) {
    toast("Data loading");
    return <div>Loading...</div>;
  }

  if (error) {
    toast("Error");
    return <div>Error</div>;
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/products/remove/${id}`);
      toast("Product deleted successfully");
      window.location.reload();
    } catch (err) {
      console.error(err);
      toast("Error deleting product");
    }
  };


  // const handleDelete = async (id)=>{
  //   try {
  //         await axios.delete(`http://localhost:4000/api/product/remove/${id}`);
  //         setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
  //         toast("Product deleted successfully");
  //         console.log(productId)
  //       } catch (err) {
  //         console.error(err);
  //         toast("Error deleting product");
  //       }
  //     };
  
  return (
    <div>
      <div className='ml-4'>
        <Link to="/AddProduts">
          <button type='button' className='bg-blue-500 text-white px-4 py-2 rounded'>Add New Items</button>
        </Link>
      </div>
      {data?.data.products.map((product) => (
        <div key={product._id} className='m-4'>
          <div>
            <ul className="bg-slate-100 p-4 rounded-xl">
              <li><img className='w-20' src={product.image[0]} alt={product.name} /></li>
              <li>
                <div>{product.name}</div>
                <div className='mt-1 mb-1 text-green-500 font-bold'>Active</div>
                <ul className='flex gap-4'>
                  <li>
                    <Link to={`/update/${product._id}`}>
                      <button className='hover:bg-green-700 bg-green-500 text-white px-2 py-1 rounded'>Edit</button>
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => handleDelete(product._id)} className='hover:bg-red-700 bg-red-500 text-white px-2 py-1 rounded'>Delete</button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewItemSetiings;
