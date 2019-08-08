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

  updateDeviceByID: function(req, res) {
    console.log ("In dbaseController.updateDeviceById req.data", req.data);
    console.log ("In dbaseController.updateDeviceById req.params", req.params);
    console.log ("In dbaseController.updateDeviceById req.query", req.query);
    console.log ("In dbaseController.updateDeviceById req.body", req.body);
    db.Device
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
      .findOne(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findUserById: function(req, res) {
    console.log ("In dbaseController.findUserById req.data", req.data);
    console.log ("In dbaseController.findUserById req.params", req.params);
    console.log ("In dbaseController.findUserById req.query", req.query);
    console.log ("In dbaseController.findUserById req.body", req.body);
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeUser: function(req, res) {
    console.log ("In dbaseController.removeUser req.data", req.data);
    console.log ("In dbaseController.removeUser req.params", req.params);
    console.log ("In dbaseController.removeUser req.query", req.query);
    console.log ("In dbaseController.removeUser req.body", req.body);
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
  updateDeviceTemp: function(req, res) {
    console.log ("In dbaseController.updateDeviceInfo req.data", req.data);
    console.log ("In dbaseController.updateDeviceInfo req.params", req.params);
    console.log ("In dbaseController.updateDeviceInfo req.query", req.query);
    console.log ("In dbaseController.updateDeviceInfo req.body", req.body);
    console.log ("In dbaseController.updateDeviceInfo req.body.data", req.body.data);
    console.log ("In dbaseController.updateDeviceInfo req.body.data.updateInfo", req.body.data.updateInfo);
    db.Device
//    .findOneAndUpdate(req.body.query, { Cur_Temp: 80 }, {new: true})
    .findOneAndUpdate(req.body.query, req.body.data, {new: true})
    .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findDeviceById: function(req, res) {
    console.log ("In dbaseController.findDeviceById req.data", req.data);
    console.log ("In dbaseController.findDeviceById req.params", req.params);
    console.log ("In dbaseController.findDeviceById req.query", req.query);
    console.log ("In dbaseController.findDeviceById req.body", req.body);
    db.Device
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateEmulateDevice: function(req, res) {
    console.log ("In dbaseController.updateEmulateDevice req.data", req.data);
    console.log ("In dbaseController.updateEmulateDevice req.params", req.params);
    console.log ("In dbaseController.updateEmulateDevice req.query", req.query);
    console.log ("In dbaseController.updateEmulateDevice req.body", req.body);
    db.Device
      .findOneAndUpdate(req.body.query, req.body.data, {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findEmulateDevice: function(req, res) {
    console.log ("In dbaseController.findEmulateDevice req.data", req.data);
    console.log ("In dbaseController.findEmulateDevice req.params", req.params);
    console.log ("In dbaseController.findEmulateDevice req.query", req.query);
    console.log ("In dbaseController.findEmulateDevice req.body", req.body);
    db.Device
      .findOne(req.params.query)
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
