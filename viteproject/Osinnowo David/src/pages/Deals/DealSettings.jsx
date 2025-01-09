import React from 'react'
import { Link } from 'react-router-dom'
function Dealsettings () {
  return (
    <>
    <div>
      <h1 className='text-center font-bold mt-1'>Deal Settings</h1>
    </div>
    <div className='ml-10 mt-10 mb-10  mr-10'>
        <Link to="/NewItemSetiings"> <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium">New Items Settings<span>-</span></h1></Link>
        <Link to="/HotDealSettings"> <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium">Hot deal Settings<span>-</span></h1></Link>
        <Link to="/FlashDealsSettings"> <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium">Flash Deals Settings<span>-</span></h1></Link>
    </div>
    
    </>
  )
}

export default Dealsettings
