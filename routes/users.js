const express = require('express');
const router = express.Router();
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const fs = require('fs');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('../utils/ExpressError');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/user');
const collegeBazarProducts = require('../models/college-bazar');
const catchAsync=require('../utils/catchAsync')
const multer = require('multer');
const {storage}=require('../cloudinary')
const upload = multer({ storage });
const {cloudinary} = require('../cloudinary')
const {loggedIn, isLoggedIn, isAuthor}=require('../middleware')

// Login page
router.get('/login',loggedIn,(req,res)=>{
    res.render('college-bazar/login')
})


router.post('/register',loggedIn, catchAsync( async (req, res, next) => {
        try {
            const { email, username, password } = req.body;
            const user = new User({ email, username });
            const registeredUser = await User.register(user, password);
            req.login(registeredUser, err => {
                if (err) return next(err);
                req.flash('success', 'Welcome to College Bazar!');
                res.redirect('/');
            })
        } catch (e) {
            req.flash('error', e.message);
            res.redirect('/login');
        }
}));


router.post('/login',loggedIn, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
        req.flash('success', 'welcome back!');
        const redirectUrl = req.session.returnTo || '/';
        delete req.session.returnTo;
        res.redirect(redirectUrl);
})

router.get('/logout',isLoggedIn, (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
    req.flash('success', "Goodbye!");
    res.redirect('/');
    });
})

router.get('/profile',isLoggedIn,catchAsync(async (req,res,next)=>{
    const user=await User.findById(req.user._id)
    const product = await collegeBazarProducts.find({ author: user._id })
    res.render('college-bazar/profile',{user,product});
}))

router.get('/profile/edit',isLoggedIn,catchAsync(async (req,res)=>{
    const user=await User.findById(req.user._id);
    res.render('college-bazar/profleEdit',{user});
}));

router.put('/profile/edit',upload.array('photos'),isLoggedIn,catchAsync(async (req,res)=>{
    const user = await User.findByIdAndUpdate(req.user._id, { ...req.body });

    if (req.files) {
        await cloudinary.uploader.destroy(user.photos['filename'])
        user.photos = await req.files.map(f => ({url:f.path , filename:f.filename}))
    }
    await user.save();
    req.flash('success', 'Successfully updated your profile!');
}))



module.exports = router;