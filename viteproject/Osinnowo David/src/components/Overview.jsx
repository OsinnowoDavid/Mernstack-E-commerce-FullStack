import React from 'react'
import { Link } from "react-router-dom";

function Overview() {
  return (
    <>
      <div>
        <ul className='ml-4 sm:ml-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-16 gap-4 mr-4 sm:mr-10'>
          <li className='bg-orange-500 rounded-md h-40 pr-1'>
            <div className='grid grid-cols-2 gap-2 sm:gap-9 text-white justify-between'>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold ml-2'>Products</h1>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold -mr-0 justify-end'>dsdc</h1>
            </div>
            <h1 className='mt-16 ml-2 font-extrabold text-lg sm:text-2xl text-white'>3.3k</h1>
          </li>
          <li className='bg-green-500 rounded-md h-40 pr-1'>
            <div className='grid grid-cols-2 gap-2 sm:gap-9 text-white justify-between'>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold ml-2'>Sales</h1>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold -mr-0 justify-end'>dsdc</h1>
            </div>
            <h1 className='mt-16 ml-2 font-extrabold text-lg sm:text-2xl text-white'>7.85M</h1>
          </li>
          <li className='bg-red-500 rounded-md h-40 pr-1'>
            <div className='grid grid-cols-2 gap-2 sm:gap-9 text-white justify-between'>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold ml-2'>Orders</h1>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold -mr-0 justify-end'>dsdc</h1>
            </div>
            <h1 className='mt-16 ml-2 font-extrabold text-lg sm:text-2xl text-white'>132</h1>
          </li>
          <li className='bg-teal-400 rounded-md h-40 pr-1'>
            <div className='grid grid-cols-2 gap-2 sm:gap-9 text-white justify-between'>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold ml-2'>Messages</h1>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold -mr-0 justify-end'>dsdc</h1>
            </div>
            <h1 className='mt-16 ml-2 font-extrabold text-lg sm:text-2xl text-white'>92</h1>
          </li>
          <li className='bg-teal-950 rounded-md h-40 pr-1'>
            <div className='grid grid-cols-2 gap-2 sm:gap-9 text-white justify-between'>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold ml-2'>Sellers</h1>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold -mr-0 justify-end'>dsdc</h1>
            </div>
            <h1 className='mt-16 ml-2 font-extrabold text-lg sm:text-2xl text-white'>81</h1>
          </li>
          <li className='bg-amber-600 rounded-md h-40 pr-1'>
            <div className='grid grid-cols-2 gap-2 sm:gap-9 text-white justify-between'>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold ml-2'>Users</h1>
              <h1 className='mt-3 text-lg sm:text-2xl font-bold -mr-0 justify-end'>dsdc</h1>
            </div>
            <h1 className='mt-16 ml-2 font-extrabold text-lg sm:text-2xl text-white'>296</h1>
          </li>
        </ul>
      </div>
      <div className='ml-4 sm:ml-10 mt-10 mb-10 mr-4 sm:mr-10'>
        <Link to="/Appsettings">
          <h1 className="mt-3 bg-slate-100 rounded-sm pt-2 pb-2 pl-3 font-medium">
            <span>App Settings</span>
          </h1>
        </Link>
      </div>
    </>
  )
}

export default Overview
