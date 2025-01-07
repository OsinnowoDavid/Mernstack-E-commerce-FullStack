import React from 'react'

import { Link } from "react-router-dom";
function Appsettings() {
  return (
    <div className='ml-10 mt-10 mb-10  mr-10'>
        {/* <Link> <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium">logo<span>Administration Settings</span></h1></Link> */}
        <Link to="/CategorySettings"> <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium"><span>Category Settings</span></h1></Link>
        <Link to="/Dealsettings"> <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium"><span>Deals Settings</span></h1></Link>
       {/* <Link>  <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium">logo<span>Shipping Settings</span></h1></Link>
        <Link> <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium">logo<span>Banner Settings</span></h1></Link>
        <Link > <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium">logo<span>Policy Settings</span></h1></Link> */}
    </div>
    
  )
}

export default Appsettings
