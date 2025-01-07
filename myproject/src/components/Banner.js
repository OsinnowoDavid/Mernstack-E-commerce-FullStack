import React from 'react';
import phone from "../assests/images/phone.jpeg";
import shoe from "../assests/images/shoe.jpeg";
import gorc from "../assests/images/gocr.jpeg";
import bag from "../assests/images/bag.jpeg";
import perfume from "../assests/images/perfume.jpeg";
import classes from "../components/banner.module.css";

function Banner() {
  return (
    <div className="container mx-auto py-5 h-96 mb-20">
      <div className={`flex ${classes.slider}`}>
        <ul className={`flex ${classes.ul}`}>
          <li className={`mx-3 ${classes.li}`}>
            <h1 className="text-xl font-bold">Keep Shopping for Phone</h1>
            <img src={phone} alt='phone' className="w-full h-auto"/>
          </li>

          <li className={`mx-3 ${classes.li}`}>
            <h1 className="text-xl font-bold">Men's Shoes</h1>
            <img src={shoe} alt='shoe' className="w-full h-auto"/>
          </li>

          <li className={`mx-3 ${classes.li}`}>
            <h1 className="text-xl font-bold">Gorc</h1>
            <img src={gorc} alt='gorc' className="w-full h-auto"/>
          </li>

          <li className={`mx-3 ${classes.li}`}>
            <h1 className="text-xl font-bold">Bag</h1>
            <img src={bag} alt='bag' className="w-full h-auto"/>
          </li>

          <li className={`mx-3 ${classes.li}`}>
            <h1 className="text-xl font-bold">Perfume</h1>
            <img src={perfume} alt='perfume' className="w-full h-auto"/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
