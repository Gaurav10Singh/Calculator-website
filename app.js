const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT||3030;

app.use('./MAIN',express.static('MAIN'));
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get("/",(req,res)=>{
    res.status(200).render('home')
});
app.get('/Calculator',(req,res)=>{
    res.status(200).render('calcu')
});
app.get('/LengthConvertor',(req,res)=>{
    res.status(200).render('LengthConvertor')
});
app.get('/BaseConvertor',(req,res)=>{
    res.status(200).render('convertor')
});
app.get('/BMI',(req,res)=>{
    res.status(200).render('BMI')
})

app.get("/about",(req,res)=>{
    res.status(200).render('about')
});

app.get("/contact_us",(req,res)=>{
    res.status(200).render('contactus')
});

app.listen(port,()=>{
    console.log(`server running st ${port}`)
});