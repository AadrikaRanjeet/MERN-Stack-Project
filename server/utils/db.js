const mongoose=require('mongoose');

const URI= process.env.MONGODB_URI;
// const URI="mongodb://localhost:27017/mern_admin";
//mongoose.connect(URI);

const connectDb=async()=>
    {
        try{
          await mongoose.connect(URI);
          console.log('connection successfull to database');
        }catch(error){
            console.error("database connection failed");
            process.exit(0);
        }
    };
    module.exports=connectDb;