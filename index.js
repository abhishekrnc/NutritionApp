const express=require('express');
const mongoose=require('mongoose');

const app=express();

mongoose.connect("mongodb://127.0.0.1:27017",{  //To connect MongoDb with the file
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> {            
    console.log("connected");
})


// app.get('/demo',(req,res)=>{
//     console.log("Get request called");
//     res.send("response is done");
// })



app.listen(8000);   //8000 is a port number



