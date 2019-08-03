// Use mongoose ORM 
const db = require("../models");

module.exports = {

  // Define the methods for the user collection
  createUser: function(req, res) {
    console.log ("In dbaseController.createUser", req.body);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function(req, res) {
    console.log ("In dbaseController.updateUser req.data", req.data);
    console.log ("In dbaseController.updateUser req.params", req.params);
    console.log ("In dbaseController.updateUser req.query", req.query);
    console.log ("In dbaseController.updateUser req.body", req.body);

    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUser: function(req, res) {
    console.log ("In dbaseController.findUser req.data", req.data);
    console.log ("In dbaseController.findUser req.params", req.params);
    console.log ("In dbaseController.findUser req.query", req.query);
    console.log ("In dbaseController.findUser req.body", req.body);
    db.User
      .find({username: req.params.username, password: req.params.password})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findUserById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeUser: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findAllUser: function(req, res) {
  //   db.User
  //     .find(req.query)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // Define the methods for the device collection
  createDevice: function(req, res) {
    console.log ("In dbaseController.createDevice", req.data);
    db.Device
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateDevice: function(req, res) {
    db.Device
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findDeviceById: function(req, res) {
    db.Device
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeDevice: function(req, res) {
    db.Device
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllDevices: function(req, res) {
    db.Device
      .find({DeviceOnline: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
