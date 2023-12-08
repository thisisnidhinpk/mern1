import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function CreateUser() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [age,setAge]=useState()
  const navigate=useNavigate()
const Submit=(e)=>
{e.preventDefault();
  axios.post("http://localhost:3001/createUser",{name,email,age})
  .then(result=>{console.log(result)
    navigate('/')
})
  .catch(err=>console.log(err))
}
  return (
    <div>CreateUser<br>
    </br>
    <form onSubmit={Submit}>
      <input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)}></input>
      <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
      <input type='text' placeholder='Age' onChange={(e)=>setAge(e.target.value)}></input>
      <button>submit</button>
    </form>
    </div>
  )
}

export default CreateUser