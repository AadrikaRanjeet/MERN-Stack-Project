
require("dotenv").config({ path: "./utils/.env" });
const express=require('express');
const app=express();
const routers=require("./router/auth-router");
const connectDb=require("./utils/db");

app.use(express.json());
app.use("/api/auth",routers);
// app.get("/",(req,res)=>{
//       res.status(200).send('Welcomes');
// });
const Port=3000;

connectDb().then(()=>{
app.listen(Port,()=>{
    console.log(`server is ruuning at port: ${Port}`);
})
});