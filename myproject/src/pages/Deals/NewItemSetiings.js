import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function NewItemSetiings() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  const { isLoading, error, data } = useQuery("edit&delete", () => {
    return axios.get("http://localhost:4000/api/product/list");
  });

  if (isLoading) {
    toast("Data loading");
    return <div>Loading...</div>;
  }

  if (error) {
    toast("Error");
    return <div>Error</div>;
  }
const id = useParams()
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:4000/api/product/remove/"+id);
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
      <div className='ml-10'>
        <Link to="/AddProduts">
          <button type='button'>Add New Items</button>
        </Link>
      </div>
      {data?.data.products.map((product) => (
        <div key={product._id}>
          <div>
            <ul className="ml-20 mr-20 mt-20 bg-slate-100 pl-10 pt-5 pb-5 pr-10 rounded-xl">
              <li><img className='w-20' src={product.image[0]} alt={product.name} /></li>
              <li>
                <div>{product.name}</div>
                <div className='mt-1 mb-1 text-green-500 font-bold'>Active</div>
                <ul className='gap-10'>
                  <li>
                    <Link to={`/update/${product._id}`}>
                      <button className='hover:bg-green-700'>Edit</button>
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => handleDelete(product._id)} className='hover:bg-red-700'>Delete</button>
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
