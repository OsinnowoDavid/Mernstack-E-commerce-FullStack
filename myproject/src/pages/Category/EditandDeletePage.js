import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EditandDeletePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:4000/api/products/${productId}`);
      setData((prevData) => ({
        ...prevData,
        data: {
          ...prevData.data,
          product: prevData.data.product.filter((product) => product._id !== productId),
        },
      }));
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <Link className='ml-20' to={"/AddProducts"}>
        <button>+ add</button>
      </Link>

      {data?.data.product.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <button onClick={() => handleDelete(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default EditandDeletePage;
