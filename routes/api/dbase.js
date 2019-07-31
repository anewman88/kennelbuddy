const router = require("express").Router();
const dbaseController = require("../../controllers/dbaseController");

// Matches with "/api/dbase"
router
  .route("/")
  .get(dbaseController.findAllDevice)
  .post(dbaseController.createUser)
  .post(dbaseController.createDevice);

// Matches with "/api/dbase/:id"
router
  .route("/:id")
  .get(dbaseController.findUserById)
  .get(dbaseController.findDeviceById)
  .put(dbaseController.updateUser)
  .put(dbaseController.updateDevice)
  .delete(dbaseController.removeUser)
  .delete(dbaseController.removeDevice);

module.exports = router;
