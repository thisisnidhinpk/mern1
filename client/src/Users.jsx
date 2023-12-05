import { Button } from 'bootstrap'
import React,{useState} from 'react'

function Users() {
    const[users,setUser]=useState([{Name:'alan',Email:'a@gmail.com',Age:25}])
  return (

    <div >
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
{
    users.map((user)=>{
       return <tr >
            <td>{key=user.Name}{user.Name}</td>
            <td>{user.Email}</td>
            <td>{user.Age}</td>
            <td><Button>Edit</Button><Button>Delete</Button></td>
        </tr>
    })
}
        </table>
        </div>
  )
}

export default Users