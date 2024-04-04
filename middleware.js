const ExpressError = require('./utils/ExpressError');
const collegeBazarProducts = require('./models/college-bazar');



module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}


module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params;
    const products= await collegeBazarProducts.findById(id)
    if (!products.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that!');
        return res.redirect(`/products/${id}`);
    }
    next();
}

module.exports.loggedIn=(req,res,next)=>{
    if(req.isAuthenticated()){
        req.flash('error','You already Logged In')
        return res.redirect('/')
    }
    next();
}


