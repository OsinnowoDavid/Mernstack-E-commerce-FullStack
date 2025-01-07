import React from 'react'
import classes from "../components/smallbanner.module.css"
function SmallBanner() {
  return (
    <div className="container-fluid py-5 mt-0"  >
      <div className={`d-flex ${classes.slider}`}>
        <ul className={`d-flex ${classes.ul}`}>
          <li className={`mx-3 bg-blue ${classes.li1}`} >
            <h1 >Elite <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg></h1>

          </li>

          <li className={`mx-3 ${classes.li2}` }>
            <h1>Yadah<br></br>Products
            </h1>

           
          </li>

          <li className={`mx-3 ${classes.li3}`}>
            <h1>Groceries <br></br> And Products</h1>
          </li>

          <li className={`mx-3 ${classes.li4}`}>
          <h1>Request<br></br> Items Quotes</h1>

          </li>

          <li className={`mx-3 ${classes.li5}`}>
          <h1>Drop<br></br> Shipping</h1>

          </li>

          <li className={`mx-3 ${classes.li6}`}>
          <h1>Logistics<br></br> Service</h1>

          </li>

          <li className={`mx-3 ${classes.li7}`}>
          <h1>Local<br></br>Products</h1>

          </li>

          <li className={`mx-3 ${classes.li8}`}>
          <h1>World Wide<br></br>  Products</h1>

          </li>
        </ul>
      </div>
    </div>
 
  )
}

export default SmallBanner
