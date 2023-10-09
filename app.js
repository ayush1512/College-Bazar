const express = require('express');
const app = express()
const mongoose = require('mongoose');
const multer = require('multer');
const collegeBazarProducts = require('./models/college-bazar');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
app.engine('ejs', ejsMate);
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Uploading Product Image
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/proImg');
      },
      filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname);
      }
});  

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

// Product list
app.get('/products',async(req,res)=>{
    const products= await collegeBazarProducts.find({})
    res.render('college-bazar/productsList',{products})
})

// Product Detail
app.get('/products/:id',async(req,res)=>{
    const product= await collegeBazarProducts.findById(req.params.id)
    res.render('college-bazar/product',{product})
})

// New Product to add page
app.get('/newProduct',(req,res)=>{
    res.render('college-bazar/newProduct')
})
//New Product upload POST
const upload = multer({ storage });

app.post('/products', upload.any('fileToUpload'), async (req, res) => {
    const productDetail = new collegeBazarProducts(req.body.productDetail);
    productDetail.image=req.file.filename
    await productDetail.save();
    res.redirect(`/products/${productDetail._id}`);
});

// Login page
app.get('/login',(req,res)=>{
    res.render('college-bazar/login')
})

// Contact Us page
app.get('/contactUs',(req,res)=>{
    res.render('college-bazar/contactUs')
})

// listening app that it is running
app.listen(3000,()=>{
    console.log('litneing 3000')
})