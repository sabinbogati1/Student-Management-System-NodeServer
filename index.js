const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    console.log("You are currently in / url");
});


app.get("/signup", (req,res)=>{
        console.log("You are in signup area");
});


app.get("/login", (req,res)=>{
    console.log("You are in login area");
});



app.listen(8080, "127.0.0.1", (err,done)=>{
    if(err){
        console.log("Error occur while listening to 8080 ", err);
    }
    else{
        console.log("Server created at port 8080");
    }
})