const express=require("express");
const router=express.Router();

const authControllers=require("../controller/auth-controller");


// router.get("",(req,res)=>{
//     res.status(200).send("Welocme Aadrika");
// });

router.route("/").get(authControllers.home);
router.route("/register").post(authControllers.register);
module.exports=router;