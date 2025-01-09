import React  from "react";
import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import axios from "axios";
import {toast} from "react-toastify"
import classes from "./fetch.module.css"
import Uplaodwidget from "./Uploadwiget.js";
// import cloudinary from "cloudinary"
const Fetchproduct = () =>{

    
       const { isLoading, data ,error} = useQuery("productlist", ()=>{
            return axios.get("http://localhost:5000/api/product/listproducts")
     

        }
    ) 

        if (isLoading) {
            return <h2> loading....</h2>
    
        }
        if(error){
            toast.error(error.message)
        }

        if(data){
         console.log(data)
        }
        



    return(

        <div className={`container ${classes.main}`}> 
<div className="row">


  {data?.data.product.map((items) => (

    <>
    {console.log(items.image[1])}


    {/* <div key={items}> <img className={classes.img} src={items.image[0]} 
    ></img></div> */}

<div key={items} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className={classes.items}>
                <div>
                  {/* <img 
                    className={classes.productImage}
                    src={items.image[0]} // Ensure you're passing the correct image here
                    alt=""
                  /> */}

                  
              <img key={items} src={items.image} alt=""/>

                  <p className={classes.name}>{items.name}</p>
                </div>

                <span className={classes.Rate}>{items.Rate}</span>
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

                <ul className={classes.forprice}>
                  <li>{items.Price}</li>
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

              <div>
              <img url={items.image[0]} alt=""/>
              </div>
              </div>
            </div>
      
<Uplaodwidget/>

    </>
 ))
  

  
  }

</div>
</div>

   )
}

export default Fetchproduct