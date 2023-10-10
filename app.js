if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const collegeBazarProducts = require('./models/college-bazar');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const fs = require('fs');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('./utils/ExpressError');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');


const userRoutes = require('./routes/users');
const collegeBazarRoutes = require('./routes/collegeBazar');

// conecting server
mongoose.connect('mongodb://127.0.0.1:27017/college-bazar',{ useNewUrlParser: true, 
useUnifiedTopology: true})
.then(async ()=>{
    console.log('MONGO open');
    // Load JSON data
    const jsonData = loadJsonData();

    if (jsonData) {
      for (const product of jsonData.products) {
        // Check if a document with the same _id already exists
        const existingProduct = await collegeBazarProducts.findOne({ _id: product._id });

        if (!existingProduct) {
          // Insert JSON data into MongoDB
          await collegeBazarProducts.create(product);
        }
    }
    }
    // listening app that it is running
    app.listen(3000,()=>{
        console.log('litneing 3000')
    })
})
.catch(err =>{
    console.log('CONNECTIO ERROR!!!!!!!!!!!!!!');
    console.log(err);
});
function loadJsonData() {
    const jsonDataFilePath = path.join(__dirname, 'seed_data', 'data.json');
  
    try {
      const jsonData = fs.readFileSync(jsonDataFilePath, 'utf-8');
      return JSON.parse(jsonData);
    } catch (error) {
      console.error('Error loading JSON data:', error);
      return null;
    }
}


app.engine('ejs', ejsMate);
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


const sessionConfig = {
  secret: 'thisshouldbeabettersecret!',
  resave: false,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}

app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
})

app.use('/', userRoutes);
app.use('/', collegeBazarRoutes)
