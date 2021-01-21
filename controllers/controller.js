const good = require("../middlewares/good")
const process = require("../middlewares/process")

exports.getHashBien = [good.validateData, good.getHashGood];
exports.createHashBien = [good.validateData, good.createHashGood];


exports.getHashProceso = [process.validateData, process.getHashProcess];
exports.createHashProceso = [process.validateData, process.createHashProcess];
