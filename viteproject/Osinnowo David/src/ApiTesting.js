import React, { useEffect, useState,} from 'react'
import axios from "axios"

function ApiTesting() {
  const [detail,setdetail] = useState([]);
  useEffect(() =>{

    axios.get("http://localhost:5000/")
    .then (res => setdetail(res.data))
    .catch(err => console.log(err))

  },[])
  

  return (
    <>
    
    
    <div>
        {detail?.map((data, i) =>(
          <>
          <div key={i}>
          <h1>{data.name}</h1>
          <h2>{data.surname}</h2>
          <h2>{data.email}</h2>
          <h2>{data.whatapp_number}</h2>
          
          </div>
          </>
        ))}
      
    </div>
    </>
  )
}

export default ApiTesting
