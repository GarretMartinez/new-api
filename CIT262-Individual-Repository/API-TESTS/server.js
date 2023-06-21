const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Sean's backend application");
});

app.get("/sean",(req,res)=>{
    res.send("Hello Sean!");
});

app.listen(3000,()=>{
    console.log("Listening");
});