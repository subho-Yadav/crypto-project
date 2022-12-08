const axios=require('axios')
const cryptoModel=require('../model/cryptoModel')

const fetchData=async (req,res)=>{
    
    try{
        if(await cryptoModel.find().count()>0){
            await cryptoModel.deleteMany()
        }
        const options={
            method:"get",
            url:`https://api.coincap.io/v2/assets`
        }
        const result=await axios(options)
    
    const dataArray=result.data.data
    dataArray.sort((a,b)=>{
        return (a.changePercent24Hr-b.changePercent24Hr)
    })
    await cryptoModel.insertMany(dataArray)
    res.send({status:true,msg:dataArray})
}catch(error){res.status(400).send({msg:error.message})}
}

module.exports.fetchData=fetchData