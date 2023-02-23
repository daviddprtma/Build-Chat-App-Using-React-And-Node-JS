const express = require('express');
const app = express();

const config = require('./config/app.js');

const port = config.appPort;


app.get('/home',(req,res)=>{
    return res.send("Home Screen");
})

app.get('/login',(req,res)=>{
    return res.send("Login Screen Works Now");
})

app.listen(port,()=> {
    console.log(`Server listening in port ${port}`);
})

console.log("Hello World");