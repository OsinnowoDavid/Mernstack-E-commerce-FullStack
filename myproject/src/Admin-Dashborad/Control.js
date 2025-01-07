import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Products.module.css';
// import productImage from '../assests/images/pro.jpeg'; // Example static image, change if dynamic
import { Component } from '../components/Carousel.js';
import Banner from '../components/Banner.js';
import SmallBanner from '../components/SmallBanner.js';
import Newitems from '../components/Newitems.js';
import Hotdeals from '../components/Hotdeals.js';
import FlashSales from '../components/FlashSales.js';
import Footer from '../landingpage/Footer.js';
function Control() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  
 



 

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
   
    <>
    <div>
    <nav className={classes.nav}>
      <div>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      
      </form>
        <ul className={classes.firstnav}>
          <Link to="/Home">
          <li>
            Retail and Wholesale
          </li>
          </Link>
          

          <Link>
          <li>
            Manufacterers
          </li>
          </Link>
          

          <Link>
          <li>
            Source By Region
          </li>
          </Link>
          
        </ul>
<SmallBanner/>
      </div>
    </nav>
    </div>
    
    <Component/>
    < Banner/>
    < Newitems/> 

    <Hotdeals/>
    <FlashSales/>

    <Footer/>

    </>
  );
}

export default Control;
