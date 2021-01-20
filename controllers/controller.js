const good = require("../middlewares/good")

exports.getHashBien = [good.validateData, good.getHashGood];
exports.createHashBien = [good.validateData, good.createHashGood];


exports.getHashProcess = [good.validateData, good.getHashGood];
exports.createHashProcess = [good.validateData, good.createHashGood];
