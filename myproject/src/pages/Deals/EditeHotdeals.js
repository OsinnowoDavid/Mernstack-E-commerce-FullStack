import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useShopContext } from '../../content';
const EditeHotdeals = () => {

  const {backendUrl} = useShopContext()
    const { id } = useParams();
    const navigate = useNavigate();
  
  
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
  
  
    const[details , setdetails]= useState([])
  
    const [image1, setimage1] = useState(false);
    const [imageurl, setimageurel] = useState(false);
    // const [image2, setimage2] = useState(null);
    // const [image3, setimage3] = useState(null);
    // const [image4, setimage4] = useState(null);
  useEffect(() => { axios.get(`${backendUrl}/api/product/single/${id}`).then((response) => {
    console.log(response.data.product);
    setName(response.data.product.name);
    setDescription(response.data.product.description);
    setPrice(response.data.product.price);
    setimageurel(response.data.product.image[0]);
  
    // setdetails(response.data);})
  }).catch((error) => {console.log(error.message)})},[id]);
  
  
  const update = async (e) => {
    e.preventDefault();
    axios.put(`${backendUrl}/api/product/update/${id}`, {name,price,description,image1}).then((response) => {
      console.log(response.data);
      navigate("/");
  
  }).catch((error) => {console.log(error.message);})}
    
  
    return (
      <div className="container mx-auto p-4">
        <h1 className='text-center font-bold mb-9 mt-9'>hoty</h1>
        <form className='ml-10 mr-10' onSubmit={update}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-gray-700">Category Name</label>
            <input
              type="text"
              id="name"
              className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
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
              className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
              value={price}
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="description" className="block text-gray-700">Description</label>
            <textarea
              id="description"
              className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group mb-4">
            <label className='block text-gray-700'>
              <img className='w-20 mb-2' src={image1 ? URL.createObjectURL(image1) : imageurl} alt='image1' />
              <input onChange={(e) => setimage1(e.target.files[0])} type='file' id='image1' hidden />
              <label htmlFor='image1' className='bg-yellow-300 text-white p-2 rounded-lg cursor-pointer'>Upload Image</label>
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Update New deals</button>
        </form>
      </div>
    )
  };
export default EditeHotdeals
