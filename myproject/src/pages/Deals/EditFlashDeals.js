import React, { useState } from 'react';
import axios from 'axios';
import logo from "../../assests/images/aut.jpg";
import { useNavigate, useParams } from 'react-router-dom';
// import { useContext } from 'react';
// import ShopCentext from "../Content.js"
import useShopContext  from "../Content.js"

const EditFlashDeals = () => {
  const { backendUrl } = useShopContext();

  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [image1, setimage1] = useState(false);
  const [image2, setimage2] = useState(null);
  const [image3, setimage3] = useState(null);
  const [image4, setimage4] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);


      
      if (image1) formData.append("image1", image1);

      const response = await axios.put(`${backendUrl}+/api/categories/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Product updated:', response.data);
      navigate("/Home");

      // Reset form
      setName('');
      setPrice('');
      setDescription('');
      setimage1(false);
      setimage2(null);
      setimage3(null);
      setimage4(null);
    } catch (error) {
      console.error('Error updating the item:', error.response?.data || error.message);
    }
  };

  return (
    <>
      <h1 className='text-center font-bold mb-9 mt-9'>Edit New Item Deal</h1>
      <form onSubmit={handleSubmit} className='ml-10 mr-10'>
        <div className="form-group">
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <label className='w-60 mt-10'>
        <img className='w-20' src={ !image1 ? logo :URL.createObjectURL(image1)} alt='image1'/>
        <input onChange={(e) =>setimage1(e.target.files[0])} type='file' id='image1' hidden></input>
       </label>      
       
         <button type="submit" className="hover:bg-green-500">Update New deals</button>
      </form>
    </>
  );
};


export default EditFlashDeals;
