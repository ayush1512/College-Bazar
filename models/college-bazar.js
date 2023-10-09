const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollegeBazarSchema = new Schema({
    category: String,
    brand:String,
    title: String,
    description:String,
    price: Number,
    fileToUpload: [{type: String}],
    location: String,
    phone:Number
});

module.exports = mongoose.model('collegeBazarProducts', CollegeBazarSchema);