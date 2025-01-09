
import React, { useState } from 'react'
import axios from 'axios'
function ApiUpdate() {
    const [name,setname]= useState("")
    const [surname,setsurname]= useState("")
    const [email,setemail]= useState("")
    const [whatapp,setwhatapp]= useState("")

    function handleSubmit(event){
        event.preventDefault();
        axios.put("http://localhost:5000/update",{name, surname,email,whatapp})
        .then(res =>{
            console.log(res)
            

        }).catch(err => console.log(err ))}
  return (
    <div>
    <form  onSubmit={handleSubmit}>
        <h1>update</h1>
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

export default ApiUpdate
