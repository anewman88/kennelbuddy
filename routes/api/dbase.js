const router = require("express").Router();
const dbaseController = require("../../controllers/dbaseController");

// Matches with prefix of "/api/dbase"

// user collection routes 
router
  .route("/user/")
  .get(dbaseController.findUser)
  .post(dbaseController.createUser);

router
  .route("/user/:id")
  .get(dbaseController.findUserById)
  .put(dbaseController.updateUser);
//  .delete(dbaseController.removeUser)

// device collection routes
router
.route("/emulatedevice/")
.get(dbaseController.findEmulateDevice)
.put(dbaseController.updateEmulateDevice);

router
.route("/device/")
.get(dbaseController.findAllDevices)
.post(dbaseController.createDevice)
//.put(dbaseController.updateDeviceInfo);
.put(dbaseController.updateDeviceTemp);

router
  .route("/device/:id")
  .get(dbaseController.findDeviceById);
//  .put(dbaseController.updateDeviceById);
//  .delete(dbaseController.removeDevice);

module.exports = router;
