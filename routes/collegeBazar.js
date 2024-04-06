const express = require('express');
const path=require('path');
const router = express.Router();
const { isLoggedIn, isAuthor } = require('../middleware');
const collegeBazarProducts = require('../models/college-bazar');
const {cloudinary} = require('../cloudinary')
const fs = require('fs');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
const User = require('../models/user');
const multer = require('multer');
const {storage}=require('../cloudinary')
const upload = multer({ storage });
const catchAsync=require('../utils/catchAsync')
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const spellcheck = new natural.Spellcheck();


// Home Page
router.get('/',catchAsync( async (req,res)=>{
    let query = req.query.q;

    if (query) {
        query = query.toLowerCase();

        const terms = new RegExp(query, 'i');
        const prod = await collegeBazarProducts.find({ category: { $regex: terms } }).populate('author');
        res.render('college-bazar/index', { prod });
    } else {
        const prod = await collegeBazarProducts.find({ }).populate('author');
        res.render('college-bazar/index', { prod});
    }
}));

// New Product to add page
router.get('/newProduct', isLoggedIn,(req,res)=>{
    res.render('college-bazar/newProduct')
});


//New Product upload POST
router.post('/products', upload.array('fileToUpload', 4), isLoggedIn, catchAsync( async (req, res, next) => {

    const productDetail = new collegeBazarProducts(req.body.productDetail);
    productDetail.fileToUpload=await req.files.map(f => ({url:f.path , filename:f.filename}))
    productDetail.author=req.user._id
  
    await productDetail.save();

    req.flash('success', 'Successfully made a new Product!');
    res.redirect(`/profile`);
}));

// Function to correct spelling
function correctSpelling(query) {
    const tokens = tokenizer.tokenize(query);
    const correctedTokens = tokens.map(token => spellcheck.getCorrections(token, 1)[0] || token);
    return correctedTokens.join(' ');
}

// Product list
router.get('/products',catchAsync(async(req,res)=>{
    let query = req.query.q;
    let suggestedQuery = null;


    if (query) {
        query = query.toLowerCase();
        const correctedQuery = correctSpelling(query);
        if (correctedQuery !== query) {
            suggestedQuery = correctedQuery;
        }

        const terms = correctedQuery.split(' ').map(term => new RegExp(term, 'i'));
        const searchConditions = terms.map(term => ({
            $or: [
                { category: { $regex: term } },
                { brand: { $regex: term } },
                { title: { $regex: term } },
                { description: { $regex: term } },
                { location: { $regex: term } }
            ]
        }));
        const prod = await collegeBazarProducts.find({ $or: searchConditions }).populate('author');
        res.render('college-bazar/productList', { prod,suggestedQuery });
    } else {
        const prod = await collegeBazarProducts.find({ }).populate('author');
        res.render('college-bazar/productList', { prod,suggestedQuery });
    }
}));


// Product Detail
router.get('/products/:id',catchAsync(async(req,res)=>{
    const prod= await collegeBazarProducts.findById(req.params.id).populate('author')
    res.render('college-bazar/productPage',{prod})
}));

router.get('/products/:id/edit',isLoggedIn,isAuthor, catchAsync(async (req,res,next)=>{
    const prod =await collegeBazarProducts.findById(req.params.id).populate('author')
    res.render('college-bazar/editProduct', {prod})
}));

router.put('/products/:id', upload.array('fileToUpload'),isLoggedIn,isAuthor,catchAsync(async (req, res) => {
    const { id } = req.params;
    const prod = await collegeBazarProducts.findById(id);
    if (!prod) {
        req.flash('error', 'Product not found');
        return res.redirect(`/products/${id}`);
    }
    const updatedProduct = await collegeBazarProducts.findByIdAndUpdate(id, { ...req.body.productDetail });
    if (req.files) {
        const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
        updatedProduct.fileToUpload.push(...imgs);
    }
    await updatedProduct.save();
    if(req.body.deleteImages){
        for(let filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename);
        }
        await updatedProduct.updateOne({$pull:{fileToUpload:{filename:{$in:req.body.deleteImages}}}})
    }
    req.flash('success', 'Successfully updated Product!');
    res.redirect(`/products/${updatedProduct._id}`);
}));
router.delete('/products/:id', isLoggedIn, isAuthor, catchAsync(async (req,res,next)=>{
    const {id}= req.params;
    const prod = await collegeBazarProducts.findById(id);
    for(let file of prod.fileToUpload){
        await cloudinary.uploader.destroy(file.filename);
    }
    await collegeBazarProducts.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted Product');
    res.redirect('/profile');
}))

// About Us page
router.get('/aboutUs',(req,res)=>{
  res.render('college-bazar/aboutUs')
});

router.get('/contactUs',(req,res)=>{
  res.render('college-bazar/contactUs')
});


module.exports = router;