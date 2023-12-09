import { Button } from 'bootstrap'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Users() {
    const[users,setUser]=useState([])
    useEffect(()=>{
axios.get('http://localhost:3001')

.then(result=>{
    setUser(result.data)
})
.catch(err=>console.log(err))
},[])
  
  return (

    <div >
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
{
    users.map((user)=>{
      return  <tr key={user.name} >
            <td >{user.name}</td>
            <td>{user.nmail}</td>
            <td>{user.age}</td>
            <td><Link to={`/update/${user._id}`} className="btn btn-success">Edit</Link><button>Delete</button></td>
        </tr>
    })
}</tbody>
        </table>
        </div>
  )
}

export default Users