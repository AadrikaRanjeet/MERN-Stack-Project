const home= async(req,res)=> {
   try{
    console.log(req.body);
    res.status(200).send("Kya hai yr");
   }
   catch(error)
   {
    console.log(error);
   }
};
const register= async(req,res)=> {
    try{
     res.status(200).send("My registeration");
    }
    catch(error)
    {
     console.log(error);
    }
 };

module.exports={home,register};