const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollegeBazarSchema = new Schema({
    name: String,
    email:String,
    productName: String,
    image: String,
    phoneNo: Number,
    price: Number,
    description: String,
    addreass: String
});

module.exports = mongoose.model('collegeBazarProducts', CollegeBazarSchema);