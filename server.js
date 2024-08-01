const express = require("express")

const color = require("colors")

const dotenv = require("dotenv").config()

const morgan = require("morgan")

const app = express()
const PORT = 8000 

// localhost : 8080
app.get('/users',(req,res)=>{
    res.send([{
        id:1,
        name:"ankit"
    },{
        id:2,
        name:"ayush"
    }])
    
})
app.get('/',(req,res)=>{
    res.send("Hello world")
    console.log("Chai pr chalte hai")
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`.bgBlue.black)
})