//create mini-express app(Separate Route)
import exp from "express";
export const userApp=exp.Router();

//
userApp.use(exp.json());

//Test Data
let users=[]

//Create API(REST[respresentational state transfer] API)   
//REST uses do not intake verbs you should only use nouns in the path
//Route to handle GET req of client(http://localhost:3000/users;)

userApp.get('/users',(req,res)=>{
   //read all users and send res
  res.json({message:"all users",payload:users})
})//request object,response object

//Route to read user by id
userApp.get('/users/:id',(req,res)=>{
//get user by id from url param
let userId=Number(req.params.id)
//find user
let user=users.find(userObj=>userObj.id===userId)
//if user not found
if(user===undefined){
return res.json({message:"User not found"})
}
//send res
  res.json({message:"user found",payload:user})
})
//Route to handle POST req of client
userApp.post('/users',(req,res)=>{
//get new user from client
const newUser=req.body
//push suer into users
users.push(newUser)
//send res
res.json({message:"user created"})
})

//Route to handle PUT req of client
userApp.put('/users',(req,res)=>{
//get modified user from client{}
let modifiedUser=req.body;
//get index of existing user in users array
let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
//if user not found
if(index===-1){
return res.json({message:"user not found"})
}
//update user with index
users.splice(index,1,modifiedUser)
//send res
res.json({message:"updated user"})
  
})

//Route to handle DELETE req of client
userApp.delete('/users/:id',(req,res)=>{
//get id of from url parameter
let idOfUrl=Number(req.params.id)//{id:'1'}
//find index of the user
let index=users.findIndex(userObj=>userObj.id===idOfUrl)
//if user not found
if(index===-1){
return res.json({message:"User not found to delete"})
}
//delete user by id
users.splice(index,1)
//send res
res.json({message:"User removed",payload:users})
})