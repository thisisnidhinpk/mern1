const express=require('express')
const mongose=require('mongoose')
const cors=require('cors')
const UserModel=require('./models/Users')


const app=express()
app.use(cors())
app.use(express.json())

mongose.connect('mongodb://localhost:27017/crud')
app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.post('/createuser',(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.listen(3001,()=>{
    console.log('running')
})
app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})