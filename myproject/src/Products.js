import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import classes from "../src/assests/Products.module.css"
import product from "../src/assests/images/pro.jpeg"
import {Link} from "react-router-dom"
function Products() {

    const [prosduct, setproduct] =useState([])
        useEffect(() =>{
        axios.get("http://localhost:5000/product")
        .then(res => setproduct(res.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div className={classes.container}>
        dashboard
    {prosduct?.map((data, i ) =>(
            <div key={i}>

                <div >
                <h1><img className={classes.productImage} src={product} alt='produst'></img></h1>
                </div>
                <h2 className={classes.name}>{data.Descriptions}</h2>
                <span>{data.Rate}</span>
                <p className={classes.Name}> <span className={classes.span}> BLooomzon Elite </span> k free Delivery</p>

             
                
                <ul>
                    <li>{data.Price} </li>
                    <li className={classes.cart}>
                        <Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/AddProduts">
                        <button >Add Prod</button>
                        </Link>
                     
                    </li>
                    <li>
                        <Link to="/EditProduct">
                        <button >Ef</button>
                        </Link>
                        
                    </li>
                </ul>
                </div>
        ))
    }
  
</div>
  )
}

export default Products