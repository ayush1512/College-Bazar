const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollegeBazarSchema = new Schema({
    category: String,
    brand:String,
    title: String,
    description:String,
    price: Number,
    fileToUpload: [{url: String, filename:String}],
    location: String,
    phone:Number,
    deleteImages: [],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('collegeBazarProducts', CollegeBazarSchema);