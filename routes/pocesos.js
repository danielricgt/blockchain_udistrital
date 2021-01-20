const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");


router.post("/blockchain/process", controllers.createHashProcess);
router.get("/blockchain/processes",controllers.getHashProcess);

module.exports = router;