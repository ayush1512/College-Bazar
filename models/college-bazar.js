const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollegeBazarSchema = new Schema({
    name: String,
    image: String,
    phoneNo: Number,
    price: Number,
    description: String,
    location: String
});

module.exports = mongoose.model('CollegeBazar', CollegeBazarSchema);