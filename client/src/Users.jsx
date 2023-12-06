import { Button } from 'bootstrap'
import React,{useState} from 'react'

function Users() {
    const[users,setUser]=useState([{Name:'alan',Email:'a@gmail.com',Age:25},{Name:'vidhya',Email:'b@gmail.com',Age:26}])
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
      return  <tr key={user.Name} >
            <td >{user.Name}</td>
            <td>{user.Email}</td>
            <td>{user.Age}</td>
            <td><button>Edit</button><button>Delete</button></td>
        </tr>
    })
}</tbody>
        </table>
        </div>
  )
}

export default Users