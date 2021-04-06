const express=require('express');
const mongoose=require('mongoose');

const app=express();
app.use(express.json());  //use to convert json to readable object

// schema for foods collection

const foodSchema=new mongoose.Schema({
    name:String,
    calories:Number,
    protein:Number,
    carbs:Number,
    fats:Number,
    fiber:Number,
    weight:Number,
})

const FoodModel=new mongoose.model("foods",foodSchema);



//Mongo Connection
mongoose.connect("mongodb://127.0.0.1:27017/nutrition",{  //To connect MongoDb with the file
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> {            
    console.log("connected");
})


app.post("/food/create",(req,res)=>{

   const food=req.body;

    let foodObj=new FoodModel(food);

    foodObj.save().then(()=>{
    res.send({status:"food stored"});
  })


})

app.get("/food")

// app.get('/demo',(req,res)=>{
//     console.log("Get request called");
//     res.send("response is done");
// })



app.listen(8000);   //8000 is a port number



