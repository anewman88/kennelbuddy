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
  .delete(dbaseController.removeUser)
  .get(dbaseController.findUserById)
  .put(dbaseController.updateUser);

router
.route("/device/")
.get(dbaseController.findAllOnlineDevices)
.post(dbaseController.createDevice)
//.put(dbaseController.updateDeviceInfo);

router
  .route("/device/:id")
  .get(dbaseController.findDeviceById)
//  .put(dbaseController.updateDeviceById);
  .delete(dbaseController.removeDevice);

router
  .route("/remotedevice/:DeviceID/:Cur_Temp/:TempMin/:TempMax")
  .put(dbaseController.remoteDeviceTemp);

router
  .route("/remotedevice/:DeviceID")
  .get(dbaseController.getRemoteDeviceInfo);

  module.exports = router;
