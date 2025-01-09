import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

function AddToCart() {
  const { isLoading, data, error } = useQuery("cart-page", () => {
    return axios.get(   "http://localhost:5000/api/product/listproducts");
  
  }
);  

  if (isLoading) {
    return <h2>Loading...</h2>; // Add return statement here
  }

  if (error) {
    return <h2>Error loading data</h2>; // Optional: handle errors
    console.log(error)
  }

  return (
    <>
      <h2>Cart Page</h2>
      {
        data?.data.product.map((product) => ( // Adjust to your API response structure
          <>
          <div key={product}>{product.Name}</div>
          
          </>
        ))
      }
    </>
  );
}

export default AddToCart;
