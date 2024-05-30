require('dotenv').config()
const express = require("express")

const app = express();
const PORT = 4000;
 
app.get('/', (req,res) =>{
    res.send("Hello world")
})

app.get('/twitter', (req,res) =>{
    res.send("hello from code aur chai!")
})

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${PORT}`)
})