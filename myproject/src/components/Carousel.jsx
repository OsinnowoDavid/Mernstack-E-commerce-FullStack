
import { Carousel } from "flowbite-react";
import image1 from "../assests/images/carusel1.jpg"
import image2 from "../assests/images/carusel2.jpg"
import image3 from "../assests/images/carusel3.jpg"
import image4 from "../assests/images/carusel4.jpg"
import image5 from "../assests/images/carusel5.jpg"
import image6 from "../assests/images/carusel6.jpg"
import image7 from "../assests/images/carusel7.jpg"
import image8 from "../assests/images/carusel8.jpg"
import image9 from "../assests/images/carusel9.jpg"
// import image1 from "../assests/images/carusel1.jpg"
// import image1 from "../assests/images/carusel1.jpg"
export function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel leftControl="left" rightControl="right">
        <img className="object-scale-down" src={image1} alt="..." ></img>
        <img className="object-scale-down" src={image9} alt="..." ></img>
        {/* <img className="object-scale-down" src={image2} alt="..." /> */}
        <img className="object-scale-down" src={image3} alt="..." />
        <img className="object-scale-down" src={image4} alt="..." />
        <img className="object-scale-down" src={image5} alt="..." />
        <img className="object-scale-down" src={image6} alt="..." />
        <img className="object-scale-down" src={image7} alt="..." />
        <img className="object-scale-down" src={image8} alt="..." />
      </Carousel>
    </div>
  );
}
