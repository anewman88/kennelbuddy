import axios from "axios";

export default {
  // Create a new user and save to the database
  createUser: function (userInfo) {
    console.log ("In createUser before axios.post ", userInfo)
    return axios.post("/api/dbase/user/", userInfo);
  },
 
  // Updates user information in the database
  updateUser: function (id, userInfo) {
    console.log ("In updateUser before axios.put id:" + id, userInfo)
    return axios.put("/api/dbase/user/" + id, userInfo);
  },
 
  // Finds the user in the database based on username and password
  findUser: function (userInfo) {
    console.log ("In findUser before axios.get ", userInfo);
    return axios.get("/api/dbase/user/", {      
            params: {
              username: userInfo.username,
              password: userInfo.password
            } 
          })
  },

  // Finds the user in the database based on id
  findUserById: function (id) {
    console.log ("In findUserById before axios.get " + id);
    return axios.get("/api/dbase/user/" + id)
  },
 
  // Finds the user in the database based on login info
  // findUser: function (id, userInfo) {
  //   return axios.get("/api/dbase/user/" + id, {
  //     params: {
  //       username: userInfo.username,
  //       password: userInfo.password
  //     } 
  //   })
  // },
  
  // Delete user information specified by id from the database
  deleteUser: function (id, userInfo) {
    console.log ("In deleteUser before axios.delete id:" + id, userInfo);
    return axios.delete("/api/dbase/user/" + id, userInfo);
  },
  
  // Create/Save a new Device 
  createDevice: function (deviceInfo) {
    console.log ("In createDevice before axios.post ", deviceInfo);
    return axios.post("/api/dbase/device/", deviceInfo);
  },

  // Finds device information to the database
  findDeviceById: function (id) {
    return axios.get("/api/dbase/device/" + id);
  },
  
  // Finds the device in the database based on DeviceID (not DBID)
  // Used only when finding device to emulate it
  findEmulateDevice: function (DeviceID) {
    console.log ("In findEmulateDevice before axios.get ", DeviceID);
    return axios.get("/api/dbase/emulatedevice/", {      
            params: {
              DeviceID: DeviceID
            } 
          })
  },

  // Updates the device in the database based on DeviceID (not DBID)
  // Used only when finding device to emulate it
  updateEmulateDevice: function (DeviceID, DeviceEmulate) {
    console.log ("In updateEmulateDevice before axios.put ", DeviceID, DeviceEmulate);
    return axios.put("/api/dbase/emulatedevice/", {
      query: {DeviceID}, 
      data: {DeviceEmulate}});
  },

  // Updates device information to the database
  updateDeviceInfo: function (DeviceID, updateInfo) {
    console.log ("In updateEmulateDevice before axios.get ", DeviceID, updateInfo);
    return axios.put("/api/dbase/device/", {
      query: {DeviceID}, 
      data: {updateInfo}});
  },
  

  // Updates device information to the database by DBID
  updateDeviceByID: function (id, updateInfo) {
    console.log ("In updateDeviceByID before axios.put ", id, updateInfo);
    return axios.put("/api/dbase/device/" + id, {
      data: {updateInfo}});
  },
  
  // Updates device information to the database
  // updateDevice: function (id, deviceInfo) {
  //   return axios.put("/api/dbase/device/" + id, deviceInfo);
  // },
  
  // Get all the active devices in the database
  getActiveDevices: function () {
    return axios.get("/api/dbase/device/");
  },

  // Deletes the device specified by id from the database
  deleteDevice: function(id) {
    return axios.delete("/api/dbase/device/" + id);
  }
};
