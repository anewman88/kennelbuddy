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

  // updateDeviceById: function(req, res) {
  //   console.log ("In dbaseController.updateDeviceById req.data", req.data);
  //   console.log ("In dbaseController.updateDeviceById req.params", req.params);
  //   console.log ("In dbaseController.updateDeviceById req.query", req.query);
  //   console.log ("In dbaseController.updateDeviceById req.body", req.body);
  //   db.Device
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

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

  // Define the methods for the device collection
  createDevice: function(req, res) {
    console.log ("In dbaseController.createDevice", req.data);
    db.Device
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // done by remote device running Python program
  remoteDeviceTemp: function(req, res) {
    console.log ("In dbaseController.remoteDeviceTemp req.data", req.data);
    console.log ("In dbaseController.remoteDeviceTemp req.params", req.params);
    console.log ("In dbaseController.remoteDeviceTemp req.query", req.query);
    console.log ("In dbaseController.remoteDeviceTemp req.body", req.body);
    console.log ("In dbaseController.remoteDeviceTemp req.body.data", req.body.data);
    db.Device
    .findOneAndUpdate({DeviceID: req.params.DeviceID}, {Cur_Temp: req.params.Cur_Temp, TempMin: req.params.TempMin, TempMax: req.params.TempMax}, {new: true})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  // done by remote device running Python program
  getRemoteDeviceInfo: function(req, res) {
    console.log ("In dbaseController.getRemoteDeviceInfo req.data", req.data);
    console.log ("In dbaseController.getRemoteDeviceInfo req.params", req.params);
    console.log ("In dbaseController.getRemoteDeviceInfo req.query", req.query);
    console.log ("In dbaseController.getRemoteDeviceInfo req.body", req.body);
    console.log ("In dbaseController.getRemoteDeviceInfo req.body.data", req.body.data);
    db.Device
    .findOneAndUpdate({ DeviceID: req.params.DeviceID }, { DeviceOnline: true, DeviceEmulate: false }, {new: true})
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

  removeDevice: function(req, res) {
    db.Device
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllOnlineDevices: function(req, res) {
    console.log ("In dbaseController.findAllOnlineDevices req.data", req.data);
    console.log ("In dbaseController.findAllOnlineDevices req.params", req.params);
    console.log ("In dbaseController.findAllOnlineDevices req.query", req.query);
    console.log ("In dbaseController.findAllOnlineDevices req.body", req.body);
    db.Device
      .find({DeviceOnline: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
