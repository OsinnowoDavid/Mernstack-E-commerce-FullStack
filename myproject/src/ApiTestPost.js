import axios from 'axios'
import React, { useState } from 'react'
function ApiTestPost() {
    const [name,setname]= useState("")
    const [surname,setsurname]= useState("")
    const [email,setemail]= useState("")
    const [whatapp,setwhatapp]= useState("")

    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:5000/create",{name, surname,email,whatapp})
        .then(res =>{
            console.log(res)
             
            

        }).catch(err => console.log(err ))
    }
  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <p>
            <input type='name' placeholder='name' onChange={e => setname(e.target.value)}></input>
            </p>

            <p>
                
                
            <input type='name' placeholder='surname'onChange={e => setsurname(e.target.value)}></input>
            </p>
            
            <p>
                
            <input type='name' placeholder='email'onChange={e => setemail(e.target.value)}></input>
                
            </p>
            <p>

            <input type='name' placeholder='whatapp-number'onChange={e => setwhatapp(e.target.value)}></input>
            </p>
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default ApiTestPost
