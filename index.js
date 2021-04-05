const express=require('express');
const mongoose=require('mongoose');

const app=express();

app.get('/demo',(req,res)=>{
    console.log("Get request called");
    res.send("response is done");
})



app.listen(8000);   //8000 is a port number



