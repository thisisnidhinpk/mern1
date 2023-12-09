import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
function UpdateUser() {
  const {id}=useParams()
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [age,setAge]=useState()
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
    
    .then(result=>{
        console.log(result.data)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
    })
    .catch(err=>console.log(err))
    },[])
  return (
    <div>UpdateUser
       <form >
      <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input type='text' placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)}></input>
      <button>submit</button>
    </form>
    </div>
  )
}

export default UpdateUser