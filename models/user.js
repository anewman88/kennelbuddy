// Use mongoose ORM for mongoDB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, index: { unique: true } },
  password: {type: String},
  Name: {type: String},
  Address1: {type: String},
  Address2: {type: String},
  City: {type: String},
  State: {type: String},
  Zip: {type: String},
  Phone1: {type: String},
  Phone2: {type: String},
  Email: {type: String},
  EC_Name: {type: String},
  EC_Phone1: {type: String},
  EC_Phone2: {type: String},
  Comment: {type: String},
  DeviceID: {type: String},
  DeviceDBID: {type: String},
  DeviceOnline: Boolean,
});

const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
