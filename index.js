const express=require('express')
const mongoose=require('mongoose')
const route=require("./route")
const app=express()

app.use(express.json())

mongoose.connect("mongodb+srv://ayush8120:GeGo5qhr7wM6VQyg@cluster0.n1nevi5.mongodb.net/group27Database?retryWrites=true&w=majority",{useNewUrlParser:true})
.then(()=>{console.log("Crypto Database connected")})
.catch((error)=>{console.log({error:error.message})})

app.use('/',route)

app.listen(process.env.PORT||3000,()=>{console.log("Express app running on PORT", 3000||process.env.PORT)})