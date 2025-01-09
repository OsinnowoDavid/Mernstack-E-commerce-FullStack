import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Admin-Dashborad/Products.module.css";
import productImage from "../src/assests/images/pro.jpeg";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "./components/Carousel.jsx";
import Banner from "./components/Banner.jsx";
// Adjust the path for UploadWidget
// import UploadWidget from "../components/UploadWidget";
function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/verified", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        console.log(response)
        if (response.status !== 200) {
          navigate("/Login");
        }
      } catch (err) {
        navigate("/Login");
        console.log(err);
      }
    };
fetchUser()
  },[]);
  ;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/product/listproducts");
        setProducts(res.data);
      } catch (err) {
        setError("Failed to load products.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
   
    <>
  <Carousel/>
  < Banner/>
    <div className={classes.container}>
      <h1>ProductS</h1>
      {error && <p className={classes.error}>{error}</p>}
      {products.length > 0 ? (
        products?.map((data, i) => (
          <div key={i} className={classes.items}>
            <div>
              <img className={classes.productImage} src={productImage} alt="Product" />
              <p className={classes.name}>{data.Descriptions}</p>
            </div>
            <span>{data.Rate}</span>
            <p className={classes.Name}>
              <span className={classes.span}> Bloomzon Elite </span>
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
            <ul>
              <li>{data.Price}</li>
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
            <ul>
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
            </ul>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
      {/* <UploadWidget /> */}
    </div>
    </>
  );
}

export default Home;
