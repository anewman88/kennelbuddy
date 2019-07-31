// Use mongoose ORM for mongoDB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new DeviceSchema object
var DeviceSchema = new Schema({
  UserID: {type:String, required:true},
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

const Device = mongoose.model("Device", DeviceSchema);

// Export the Device model
module.exports = Device;