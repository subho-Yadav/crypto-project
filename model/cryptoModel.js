const mongoose=require('mongoose')
const cryptoSchema=new mongoose.Schema({
    symbol:String,
    name:String,
    marketCapUsd:String,
    priceUsd:String
},{timestamps:true})

module.exports=mongoose.model('Crypto',cryptoSchema)