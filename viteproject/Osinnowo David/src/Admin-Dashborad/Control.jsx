import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Products.module.css';
// import productImage from '../assests/images/pro.jpeg'; // Example static image, change if dynamic
import { Component } from '../components/Carousel.jsx';
import Banner from '../components/Banner.jsx';
import SmallBanner from '../components/SmallBanner.jsx';
import Newitems from '../components/Newitems.jsx';
import Hotdeals from '../components/Hotdeals.jsx';
import FlashSales from '../components/FlashSales.jsx';
import Footer from '../landingpage/Footer.jsx';
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
      
      </form>
       
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
