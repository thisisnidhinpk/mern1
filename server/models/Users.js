const mongose=require('mongoose')
const UsersSchema=new mongose.Schema({
    name:String,
    email:String,
    age:Number
})

const UserModel=mongose.model("users",UsersSchema)
module.exports(UserModel)