const express = require('express');
const path=require('path');
const router = express.Router();
const { isLoggedIn, isAuthor, validateProduct } = require('../middleware');
const collegeBazarProducts = require('../models/college-bazar');
const fs = require('fs');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
const User = require('../models/user');
const multer = require('multer');
const {storage}=require('../cloudinary')
const upload = multer({ storage });
const catchAsync=require('../utils/catchAsync')


// Home Page
router.get('/',(req,res)=>{
  const alertType = "error";
const alertMessage = "An error occurred. Please try again.";
    res.render('college-bazar/index')
});

// New Product to add page
router.get('/newProduct', isLoggedIn,(req,res)=>{
    res.render('college-bazar/newProduct')
})


//New Product upload POST
router.post('/products', upload.array('fileToUpload', 15), isLoggedIn, catchAsync( async (req, res, next) => {
    const files = req.files;

    const productDetail = new collegeBazarProducts(req.body.productDetail);
    productDetail.fileToUpload=req.files.map(f => ({url:f.path , filename:f.filename}))
    productDetail.author=req.user._id
  
    await productDetail.save();

    // To save Products in jason formate
    const products = await collegeBazarProducts.find({});
    const dataToSave = {
      products,
    };

    const jsonDataFilePath = path.join(__dirname,'..', 'seed_data', 'data.json');
    fs.writeFileSync(jsonDataFilePath, JSON.stringify(dataToSave, null, 2), 'utf-8');

    req.flash('success', 'Successfully made a new Product!');
    res.redirect(`/products/${productDetail._id}`);
}));


// Product list
router.get('/products',catchAsync(async(req,res)=>{
    const products= await collegeBazarProducts.find({})
    res.render('college-bazar/productsList',{products})
}))

// Product Detail
router.get('/products/:id',catchAsync(async(req,res)=>{
    const product= await collegeBazarProducts.findById(req.params.id)
    res.render('college-bazar/product',{product})
}))

//
router.get('/aboutUs',(req,res)=>{
  res.render('college-bazar/aboutUs')
})

router.get('/contactUs',(req,res)=>{
  res.render('college-bazar/contactUs')
})


module.exports = router;