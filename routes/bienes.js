const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");


router.post("/blockchain/good", controllers.createBien);
router.get("/blockchain/goods",controllers.getHashBien);

module.exports = router;