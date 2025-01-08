import React, { useState } from 'react';
import axios from 'axios';
import logo from "../../assests/images/aut.jpg"
import { useShopContext } from '../../content';
const Addcategory= () => {
  const {backendUrl} = useShopContext()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

const [image1, setimage1] = useState(false);
const [image2, setimage2] = useState(false);
const [image3, setimage3] = useState(false)
const [image4, setimage4] = useState(false)



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
    formData.append('description', description);


 image1 &&formData.append("image1", image1)
// image2 &&formData.append("image2", image2)
// image3 && formData.append("image3", image3)
// image4 && formData.append("image4", image4)

      const response = await axios.post(`${backendUrl}/api/categories/postcategory`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <>
    
    <h1 className='text-center '>Add category</h1>
    <form onSubmit={handleSubmit} className='ml-10 mr-10'>
      <div className="form-group">
        <label htmlFor="name">Product Name</label>
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
      
      {/* {['image1', 'image2', 'image3', 'image4'].map((image) => (
        <div className="form-group" key={image}>
          <label htmlFor={image}>{`Upload ${image}`}</label>
          <input
            type="file"
            id={image}
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
            required
            name={image} // Set name to match the key in the state
          />
        </div>
      ))}

       */}

       <label className='mt-5 w-64'>
        <img className='w-64 object-cover' src={ !image1 ? logo :URL.createObjectURL(image1)} alt='image1'/> click me to pick image
        <input onChange={(e) =>setimage1(e.target.files[0])} type='file' id='image1' hidden></input>
       </label>
{/* 
       <label>
       <img  className='w-20'src={ !image2 ? logo :URL.createObjectURL(image2)} alt='image1'/>
        <input onChange={(e) =>setimage2(e.target.files[0])} type='file' id='image2' hidden></input>
       </label>

       <label>
       <img src={ !image3 ? logo :URL.createObjectURL(image3)} alt='image1'/>
        <input onChange={(e) =>setimage3(e.target.files[0])} type='file' id='image3' hidden></input>
       </label>

       <label>
       <img className='w-20' src={ !image4 ? logo :URL.createObjectURL(image4)} alt='image4'/>
        <input onChange={(e) =>setimage4(e.target.files[0])} type='file' id='image4' hidden></input>
       </label> */}
      <button type="submit" className="">Add Category</button>
    </form>
    </>
  );
};

export default Addcategory;
