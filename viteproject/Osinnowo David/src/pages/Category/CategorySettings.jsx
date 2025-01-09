import React from 'react'
import { Link } from 'react-router-dom'
function CategorySettings() {
  return (
    <>
    <div className='ml-10'>
<Link  to="/Addcategory">

<button type='butten'>Add Category</button>
</Link>
    </div>
    <div className='ml-10 mt-10 mb-10  mr-10'>
        <Link to="/EditandDeletePage"> <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium">MainCategory Settings<span>-</span></h1></Link>
        <Link> <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium">SubCategory Settings<span>-</span></h1></Link>
        <Link> <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium">Title Category Settings<span>-</span></h1></Link>
    </div>
    
    </>
  )
}

export default CategorySettings
