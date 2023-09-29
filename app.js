const express = require('express');
const app = express()
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
app.engine('ejs', ejsMate);
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// conecting server
mongoose.connect('mongodb://127.0.0.1:27017/college-bazar',{ useNewUrlParser: true, 
useUnifiedTopology: true})
.then(()=>{
    console.log('MONGO open');
})
.catch(err =>{
    console.log('CONNECTIO ERROR!!!!!!!!!!!!!!');
    console.log(err);
})

// Home Page
app.get('/',(req,res)=>{
    res.render('college-bazar/index')
})

// New Product to add
app.get('/newProduct',(req,res)=>{
    res.render('college-bazar/newProduct')
})

// listening app that it is running
app.listen(3000,()=>{
    console.log('litneing 3000')
})