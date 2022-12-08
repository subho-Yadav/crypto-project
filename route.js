const express= require('express');
const router= express.Router();
const fetchData=require('./controller/fetchData')

router.get("/test",function(req,res){
    res.send("All is Well")
})

router.get("/fetch-data",fetchData.fetchData)

router.all('/*',function(req,res){
    return res.status(400).send({status:false, message:"pls provide valid path"})
})


module.exports=router