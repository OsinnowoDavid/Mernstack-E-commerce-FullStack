import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useShopContext } from '../../content';

function EditeHotdeals() {
  const { backendUrl } = useShopContext()
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image1, setimage1] = useState(false);
  const [imageurl, setimageurel] = useState(false);

  useEffect(() => {
    axios.get(`${backendUrl}/api/hotprduct/singlehotproducts/${+id}`)
      .then((response) => {
        console.log(response.data);
        setName(response.data.product.name);
        setDescription(response.data.product.description);
        setPrice(response.data.product.price);
        setimageurel(response.data.product.image[0]);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const update = async (e) => {
    e.preventDefault();
    axios.put(`${backendUrl}/api/product/update/${id}`, { name, price, description, image1 })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-center font-bold mb-9 mt-9 text-2xl'>Edit Hot Deal</h1>
      <form className='mx-auto max-w-lg' onSubmit={update}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-gray-700">Category Name</label>
          <input
            type="text"
            id="name"
            className="form-control w-full px-3 py-2 border rounded-lg"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="price" className="block text-gray-700">Price</label>
          <input
            type="text"
            id="price"
            className="form-control w-full px-3 py-2 border rounded-lg"
            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea
            id="description"
            className="form-control w-full px-3 py-2 border rounded-lg"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group mb-4">
          <label className='block text-gray-700'>Upload Image</label>
          <div className="flex items-center">
            <img className='w-20 h-20 object-cover mr-4' src={image1 ? URL.createObjectURL(image1) : imageurl} alt='image1' />
            <input onChange={(e) => setimage1(e.target.files[0])} type='file' id='image1' hidden />
            <label htmlFor='image1' className='bg-yellow-300 text-white p-2 rounded-lg cursor-pointer'>Upload Image</label>
          </div>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Update New Deals</button>
      </form>
    </div>
  );
}

export default EditeHotdeals
