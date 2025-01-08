import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useShopContext } from '../../content';
function EditeHotdeals() {
 const {backendUrl} = useShopContext()


    const {id}  = useParams();
    const navigate = useNavigate();
  
  
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

  const [image1, setimage1] = useState(false);
  const [imageurl, setimageurel] = useState(false);

    useEffect(() => { axios.get(`${backendUrl}/api/hotprduct/singlehotproducts/${+id}`).then((response) => {
        console.log(response.data);
        setName(response.data.product.name);
        setDescription(response.data.product.description);
        setPrice(response.data.product.price);
        setimageurel(response.data.product.image[0]);
      
      
        // setdetails(response.data);})
      }).catch((error) => {error.message})},[]);
      const update = async (e) => {
        e.preventDefault();
        axios.put(`${backendUrl}/api/product/update/${id}`, {name,price,description,image1}).then((response) => {
          console.log(response.data);
          navigate("/");
      
      }).catch((error) => {error.message});}
              
      return (
    
        <div>
          
        {/* {data?.data.product.map((update) =>( */}
        
              <div >
              
        
        
              <h1 className='text-center font-bold mb-9 mt-9'>Edit H0t Deal 2</h1>
              <form  className='ml-10 mr-10' onSubmit={update} >
                <div className="form-group">
                  <label htmlFor="name">Category Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    required
                    onChange ={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    id="price"
                    className="form-control"
                    value={price}
                    required
                    onChange ={(e) => setPrice(e.target.value)}
        
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    className="form-control"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    // onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
        
                <label className='w-60 mt-10'>
                <img className='w-20' src={image1 ? URL.createObjectURL(image1) : imageurl} alt='image1'/>
                <input onChange={(e) =>setimage1(e.target.files[0])} type='file' id='image1' hidden></input>
                <label htmlFor='image1' className='bg-yellow-300 text-white p-2 rounded-lg'>Upload Image</label>
               </label>      
               
                 <button type="submit" className="hover:bg-green-500">Update New deals</button>
              </form>
            
              </div>
              
            {/* ))} */}
          
          
        </div>)
        };

export default EditeHotdeals
