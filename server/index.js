const express=require('express')
const what=express();

//isko routing krna bolte 
what.get('/',(req,res)=>{
    res.send("Welcome");
});
what.get('/about',(req,res)=>{
    res.send("About");
});

what.listen(3000,()=>{
  console.log("Listening");
})