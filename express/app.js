//import library
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const router=require('./router/router.js')
//add middlewares
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
//configure the application
//cors setting 
app.use(function(req,resp,next){
    resp.setHeader('Allow-Control-Allow-Origin','*');
    resp.setHeader('Allow-Control-Allow-Method','GET,POST,PUT,DELETE');
    resp.setHeader('Allow-Control-Allow-headers','Content-Type');
    resp.setHeader('Allow-Control-Allow-Credentials',true);
    next();
})
//add url handler
app.use("/",router);
//start the server
app.listen(3002,function(){
    console.log("server running at port no 3002")
})
module.exports=app;
