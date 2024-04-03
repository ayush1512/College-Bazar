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
    productDetail.fileToUpload=await req.files.map(f => ({url:f.path , filename:f.filename}))
    productDetail.author=req.user._id
  
    await productDetail.save();

    req.flash('success', 'Successfully made a new Product!');
    res.redirect(`/profile`);
}));


// Product list
router.get('/products',catchAsync(async(req,res)=>{
    const products= await collegeBazarProducts.find({}).populate('author')
    res.render('college-bazar/productsList',{products})
}))

// Product Detail
router.get('/products/:id',catchAsync(async(req,res)=>{
    const prod= await collegeBazarProducts.findById(req.params.id).populate('author')
    res.render('college-bazar/product',{prod})
}))

// Product Detail Edit
router.put('/products/:id/edit',isLoggedIn,catchAsync(async (req,res,next)=>{
    const {id} =req.params;
    
    const productDetail = await collegeBazarProducts.findByIdAndUpdate(id,{...req.body.productDetail})
}))


// About Us Page
router.get('/aboutUs',(req,res)=>{
  res.render('college-bazar/aboutUs')
})

router.get('/contactUs',(req,res)=>{
  res.render('college-bazar/contactUs')
})


module.exports = router;