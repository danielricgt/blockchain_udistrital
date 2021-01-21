const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");


router.post("/blockchain/process", controllers.createHashProceso);
router.get("/blockchain/processes",controllers.getHashProceso);

module.exports = router;