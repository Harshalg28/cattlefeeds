const router=require("express").Router();
router.get("/",(req,res)=>{
 res.json([{id:1,name:"Cattle Feed",price:1200}]);
});
module.exports=router;