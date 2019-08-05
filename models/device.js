// Use mongoose ORM for mongoDB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new DeviceSchema object
var deviceSchema = new Schema({
  DeviceID: {type: String, required: true},
  UserDBID: {type:String, required:true},
  DeviceOnline: {Boolean},
  DeviceEmulate: {Boolean},
  PetName: {type: String},
  PetImage: {type: String},
  TempMax: {type: Number},
  TempMin: {type: Number},
  Upper_Temp: {type: Number},
  Lower_Temp: {type: Number},
  Interval: {type: Number},
  Cur_Temp: {type: Number},
  Temp: [{
         Value: Number,
         Time: Date 
        }]
});

const Device = mongoose.model("Device", deviceSchema);

// Export the Device model
module.exports = Device;