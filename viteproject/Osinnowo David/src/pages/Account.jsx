import React from 'react'
import { Link } from "react-router-dom"

function Account() {
  return (
    <div className="bg-gray-400 min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Only for authenticated users</h1>
        <Link to="/login" className="text-lg sm:text-xl underline">
          Go to Login
        </Link>
      </div>
    </div>
  )
}

export default Account
