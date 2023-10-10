if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const multer = require('multer');
const collegeBazarProducts = require('./models/college-bazar');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const fs = require('fs');
const {storage}=require('./cloudinary')
app.engine('ejs', ejsMate);
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


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

app.post('/products', upload.array('fileToUpload', 15), async (req, res) => {
    try {
      const files = req.files;
  
      if (files.length < 3 || files.length > 15) {
        return res.status(400).send('You must upload between 3 to 15 images.');
      }

      const productDetail = new collegeBazarProducts(req.body.productDetail);
      productDetail.fileToUpload=req.files.map(f => ({url:f.path , filename:f.filename}))
  
      await productDetail.save();

      // To save Products in jason formate
      const products = await collegeBazarProducts.find({});
      const dataToSave = {
        products,
      };

      const jsonDataFilePath = path.join(__dirname, 'seed_data', 'data.json');
      fs.writeFileSync(jsonDataFilePath, JSON.stringify(dataToSave, null, 2), 'utf-8');


      res.redirect(`/products/${productDetail._id}`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
});
  

// Login page
app.get('/login',(req,res)=>{
    res.render('college-bazar/login')
})

// Contact Us page
app.get('/contactUs',(req,res)=>{
    res.render('college-bazar/contactUs')
})