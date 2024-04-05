const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photos: {url: String, filename:String},
  phone: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  college: {
    type: String,
    required: false,
  },
  branch: {
    type: String,
    required: false,
  },
  year: {
    type: Number,
    required: false,
  }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
