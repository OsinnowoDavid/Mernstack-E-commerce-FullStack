import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import logo from "../../assests/images/aut.jpg"
import { useShopContext } from '../../content';
// import { toast } from 'react-toastify';
const AddProduct = () => {
  const {backendUrl} = useShopContext()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [rate, setrate] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate()
const [image1, setimage1] = useState(false);
// const [image2, setimage2] = useState(false);
// const [image3, setimage3] = useState(false)
// const [image4, setimage4] = useState(false)



  // const [images, setImages] = useState({
  //   image1: null,
  //   image2: null,
  //   image3: null,
  //   image4: null,
  // });

  // const handleImageChange = (e) => {
  //   const { name, files } = e.target;
  //   if (files && files.length > 0) {
  //     setImages((prevImages) => ({
  //       ...prevImages,
  //       [name]: files[0], // Store only the first file for each input
  //     }));
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Append each selected image to formData
    // Object.entries(images).forEach(([key, value]) => {
    //   if (value) {
    //     formData.append('images', value); // Use 'images' to match the backend expectation
    //   }
    // });

    try {

      
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('rate', rate);
    formData.append('description', description);


 image1 &&formData.append("image1", image1)
// image2 &&formData.append("image2", image2)
// image3 && formData.append("image3", image3)
// image4 && formData.append("image4", image4)

      const response = await axios.post(`${backendUrl}/api/products/add`, formData, {
        
        headers: {
          'Content-Type': 'multipart/form-data',
        }
        
      }
      
    
    );
    if (response.status ===200 ){
      navigate("/")
    }

      console.log('Product added:', response.data);
      // Reset the form after submission
      setName('');
      setPrice('');
      setDescription('');
      // setImages({
      //   image1: null,
      //   image2: null,
      //   image3: null,
      //   image4: null,
      // });

      toast.success('Product added successfully!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Auto close after 3 seconds
      });

      if (response.data.success) {
        navigate("/"); // Navigate to home page after success
      }
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Error adding product. Please try again.', {
        position:"left",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <h1 className='text-center text-2xl font-bold mb-4'>Add Product</h1>
      <form onSubmit={handleSubmit} className='mx-10 p-6 bg-white shadow-md rounded'>
        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Product Name</label>
          <input
            type="text"
            id="name"
            className="form-control border rounded w-full py-2 px-3 text-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
          <input
            type="text"
            id="price"
            className="form-control border rounded w-full py-2 px-3 text-gray-700"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            className="form-control border rounded w-full py-2 px-3 text-gray-700"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="rate" className="block text-gray-700 font-bold mb-2">Rate</label>
          <textarea
            id="rate"
            className="form-control border rounded w-full py-2 px-3 text-gray-700"
            value={rate}
            onChange={(e) => setrate(e.target.value)}
            required
          ></textarea>
        </div>
        <label className='mt-5 w-64 block'>
          <img className='w-64 object-cover mb-2' src={!image1 ? logo : URL.createObjectURL(image1)} alt='image1' />
          <span className="block text-gray-700 font-bold mb-2">Click to pick image</span>
          <input onChange={(e) => setimage1(e.target.files[0])} type='file' id='image1' hidden />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add New Item Deal
        </button>
      </form>
    </>
  );
};

export default AddProduct;
