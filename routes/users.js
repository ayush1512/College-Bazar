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
const catchAsync=require('../utils/catchAsync')
const {loggedIn, isLoggedIn}=require('../middleware')

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
    req.logout();
    req.flash('success', "Goodbye!");
    res.redirect('/');
})

router.get('/profile',isLoggedIn,catchAsync(async (req,res,next)=>{
    res.render('college-bazar/profile');
}))



module.exports = router;