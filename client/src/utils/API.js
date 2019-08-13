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

  // Updates device information to the database by DBID
  // updateDeviceById: function (id, updateInfo) {
  //   console.log ("In updateDeviceById before axios.put " + id, updateInfo);
  //   return axios.put("/api/dbase/device/" + id, updateInfo);
  // },
  
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
 
  // Delete user information specified by id from the database
  removeUser: function (id, userInfo) {
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
  
  // Get all the active devices in the database
  getActiveDevices: function () {
    return axios.get("/api/dbase/device/");
  },

  // Deletes the device specified by id from the database
  removeDevice: function(id) {
    return axios.delete("/api/dbase/device/" + id);
  },

  // Finds all the devices online in the database based on DeviceID and DeviceOnline: true
  findAllOnlineDevices: function () {
    console.log ("In findAllOnlineDevices before axios.get ");
    return axios.get("/api/dbase/device/")
  }
};
