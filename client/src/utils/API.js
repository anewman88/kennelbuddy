import axios from "axios";

export default {
  // Create a new user and save to the database
  createUser: function (userInfo) {
    return axios.post("/api/dbase/user/", userInfo);
  },
 
  // Updates user information in the database
  updateUser: function (id, userInfo) {
    return axios.put("/api/dbase/user/" + id, userInfo);
  },
 
  // Finds the user in the database based on id
  findUser: function (id) {
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
    return axios.delete("/api/dbase/user/" + id, userInfo);
  },
  
  // Create/Save a new Device 
  createDevice: function (deviceInfo) {
    return axios.post("/api/dbase/device/", deviceInfo);
  },

  // Finds device information to the database
  findDevice: function (id) {
    return axios.put("/api/dbase/device/" + id);
  },
  
  
  // Updates device information to the database
  updateDevice: function (id, deviceInfo) {
    return axios.put("/api/dbase/device/" + id, deviceInfo);
  },
  
  // Get all the active devices in the database
  getActiveDevices: function () {
    return axios.get("/api/dbase/device/");
  },

  // Deletes the device specified by id from the database
  deleteDevice: function(id) {
    return axios.delete("/api/dbase/device/" + id);
  }
};
