var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new TemperatureSchema object
var TemperatureSchema = new Schema({
  Value: Number
});

// This creates our model from the above schema, using mongoose's model method
var Temperature = mongoose.model("Temperature", TemperatureSchema);

// Export the Temperature model
module.exports = Temperature;