import express from 'express';

const app = express()

const PORT = process.env.PORT || 5000

app.get('/users',(req,res)=>{
    res.json({message:"ok"})
})

app.get('/check',(req,res)=>{
    res.json({message:"hello"})
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}...`)
})