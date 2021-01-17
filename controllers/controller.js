const good = require("../middlewares/good")

exports.getHashBien = [good.validateData, good.getHashGood];
exports.createBien = [good.validateData, good.createGood];
