// Use mongoose ORM for mongoDB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, index: { unique: true } },
  password: {type: String, required: true },
  Name: {type: String, required: true },
  Address1: {type: String, required: true},
  Address2: {type: String},
  City: {type: String, required: true},
  State: {type: String, required: true},
  Zip: {type: String, required: true},
  Phone1: {type: String, required: true},
  Phone2: {type: String},
  Email: {type: String},
  EC_Name: {type: String, required: true},
  EC_Phone: {type: String, required: true},
  Comment: {type: String},
  PetName: {type: String},
  PetImage: {type: String},
  DeviceID: {type: String},
  DeviceOnline: Boolean,
  Upper_Temp: {type: Number},
  Lower_Temp: {type: Number},
  Interval: {type: Number},
  Temp: [{
         Value: Number,
         Time: Date 
        }]
});

const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
