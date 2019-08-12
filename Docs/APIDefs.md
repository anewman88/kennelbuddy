dbaseController.js
- createUser
- updateUser
- findUser
- findUserById
- removeUser
- createDevice
- updateDeviceTemp
- remoteDeviceTemp
- getRemoteDeviceInfo
- updateDeviceByID
- findDeviceById
- updateEmulateDevice
- findEmulateDevice
- removeDevice
- findAllDevices
----------------------------------------------
dbase.js
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

router
  .route("/remotedevice/:DeviceID/:Cur_Temp/:TempMin/:TempMax")
  .put(dbaseController.remoteDeviceTemp);

router
  .route("/remotedevice/:DeviceID")
  .get(dbaseController.getRemoteDeviceInfo);
-----------------------------------------------
API.js
createUser: function (userInfo) 
updateUser: function (id, userInfo)
updateDeviceById: function (id, updateInfo)
findUser: function (userInfo)
findUserById: function (id)
deleteUser: function (id, userInfo)
findDeviceById: function (id)
findEmulateDevice: function (DeviceID)
updateEmulateDevice: function (DeviceID, DeviceEmulate)
updateDeviceInfo: function (DeviceID, updateInfo)
updateDeviceTemp: function (DeviceID, Cur_Temp)
getActiveDevices: function ()
deleteDevice: function(id)

