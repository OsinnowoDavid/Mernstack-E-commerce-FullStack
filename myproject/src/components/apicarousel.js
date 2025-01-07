import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Carousel.module.css"; // Optional: your CSS styles

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current slide
  const [items, setItems] = useState([]); // Stores the items from the API

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/your-endpoint");
        setItems(response.data); // Set the fetched items to the state
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Auto slide with interval
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [items.length]);

  // Function to handle manual navigation (optional)
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Return if no items fetched yet
  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.carouselContainer}>
      {/* Slide */}
      <div className={classes.slide}>
        <img
          src={items[currentIndex].imageUrl} // Adjust according to API structure
          alt={items[currentIndex].description} // Adjust according to API structure
          className={classes.carouselImage}
        />
        <p className={classes.caption}>{items[currentIndex].description}</p>
      </div>

      {/* Navigation buttons */}
      <div className={classes.navigation}>
        {items.map((_, index) => (
          <button
            key={index}
            className={`${classes.navButton} ${currentIndex === index ? classes.active : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
