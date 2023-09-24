const express = require('express');
const app = express()
const mongoose = require('mongoose');

// conecting server
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp',{ useNewUrlParser: true, 
useUnifiedTopology: true})
.then(()=>{
    console.log('MONGO open');
})
.catch(err =>{
    console.log('OH NO MONGO CONNECTIO ERROR!!!!!!!!!!!!!!');
    console.log(err);
})


app.get('/',(req,res)=>{
    res.send('hellow this is college bazar')
})

// listening app that it is running
app.listen(3000,()=>{
    console.log('litneing 3000')
})