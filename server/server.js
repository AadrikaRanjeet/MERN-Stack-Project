const express=require('express');
const app=express();

app.get("/",(req,res)=>{
      res.status(200).send('Welcome');
});
const Port=5000;
app.listen(Port,()=>{
    console.log(`server is ruuning at port: ${Port}`);
})