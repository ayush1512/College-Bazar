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

// Login page
router.get('/login',(req,res)=>{
    res.render('college-bazar/login')
})


router.post('/register', catchAsync( async (req, res, next) => {
    if(!req.isAuthenticated()){
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
    } else{
        req.flash('error','You already logedin')
        res.redirect('/')
    }
}));


router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    if(!req.isAuthenticated()){
        req.flash('success', 'welcome back!');
        const redirectUrl = req.session.returnTo || '/';
        delete req.session.returnTo;
    res.redirect(redirectUrl);
    } else{
        req.flash('error', 'You already logedin')
        res.redirect('/')
    }
})

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', "Goodbye!");
    res.redirect('/');
})

router.get('/profile',catchAsync(async (req,res,next)=>{
    res.render('college-bazar/profile');
}))



module.exports = router;