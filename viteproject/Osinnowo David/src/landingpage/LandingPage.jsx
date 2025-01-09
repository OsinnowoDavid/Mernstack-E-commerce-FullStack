import React from 'react'
import  { Component } from '../components/Carousel.jsx'
import Banner from '../components/Banner.jsx'
import Footer from './Footer.jsx'
import  { useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
// import Home from '../home.js'
import {useState} from "react"
import classes from "../Admin-Dashborad/Products.module.css";
// import productImage from "../assests/images/pro.jpeg";
// import { useQuery } from 'react-query';
function LandingPage() {
  
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  
  async function fetchProducts () {
    // setLoading(true)
    try{
      
    const response = await axios.get("http://localhost:5000/api/product/listproducts")
      console.log(response.data.product)
      setProducts(response.data.product)
      return response.data.product
    }catch(error){
    //  setError(error)

    }
    
    // finally{setLoading(false)}s
  
   }
 
  useEffect(() => {

    fetchProducts();
  }, []);


  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }
  return (
    <>
    <div>
       <Component/> 
      <Banner/>

      <div className={`container ${classes.main}`}>
      <div className="row">
        {products.length > 0 ? (
          products?.map((data, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className={classes.items}>
                <div className={classes.divbg}>
                  <img
                    className={classes.productImage}
                    src={data.image } // Ensure you're passing the correct image here
                    alt=""
                  />
            
                  <p className={classes.name}>{data.Descriptions}</p>
                </div>
                <h1>{data.name}</h1>
                <span className={classes.Rate}>{data.Rate}</span>
                <div className=''>

                <p className={classes.Name}>
                  <span className={classes.span}>Bloomzon Elite</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="orange"
                    className="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                  Free Delivery
                </p>
</div>
                <ul className={classes.forprice}>
                  <li>${data.price}</li>
                  <li className={classes.cart}>
                    <Link to="/addToCart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-cart4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                      </svg>
                    </Link>
                  </li>
                </ul>

                {/* <ul>
                  <li>
                    <Link to="/AddProducts">
                      <button>Add Products</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/EditProduct">
                      <button>Edit Products</button>
                    </Link>
                  </li>
                  <li>
                    <button>Delete Products</button>
                  </li>
                </ul> */}
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
      < Footer/>
    </div>
    </>
  )
}

export default LandingPage
