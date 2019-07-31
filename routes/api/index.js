const router = require("express").Router();
const dbaseRoutes = require("./dbase");

// database routes
router.use("/dbase", dbaseRoutes);

module.exports = router;
