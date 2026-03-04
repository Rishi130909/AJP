const express=require("express")

const app=express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.json({message:"hello from express Rst api"})
})
app.get('/',(req,res)=>{
    res.json({message:"hello from express Rst api"})
})

const port = process.env.port ||3000
app.listen(port,()=>{
    console.log('Express Rest api running on http://localhost:$(port)')
})





app.use(express.json())
app.get('/',(req,res)=>{
    res.json({message:"hello from express Rst api"})
})
app.get('/',(req,res)=>{
    res.json({message:"hello from express Rst api"})
})

const port = process.env.port ||4000
app.listen(port,()=>{
    console.log('Express Rest api running on http://localhost:$(port)')
})
