//Create HTTP server
import exp from "express";
const app=exp()//internally contains HTTP server and .....
//use middleware
app.use(middleware1)
app.use(middleware2)
//set a port number
const port=3000;
//use body parser middleware(in-built)
app.use(exp.json());

//use body parser middleware(in-built)
app.use(exp.json());

//create custom middleware
function middleware1(req,res,next){
//send res from middleware
//res.json({message:"this res from middleware"})
//forward req to next
console.log("middleware 1  executed")
next();
} 

function middleware2(req,res,next){
//send res from middleware
//res.json({message:"this res from middleware"})
//forward req to next
console.log("middleware 2 executed")
next();
} 

//assign port number to HTTP server
app.listen(port,()=>console.log(`server listening to port ${port}...`))


import {userApp} from "./APIs/userAPI.js";
//forward req to userAPI if path starts with /user-api
app.use('/user-api',userApp)
import {productApp} from "./APIs/productAPI.js";
//forward req to productAPI if path starts with /product-api
app.use('/product-api',productApp)
