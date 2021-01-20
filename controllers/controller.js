const good = require("../middlewares/good")

exports.getHashBien = [good.validateData, good.getHashGood];
exports.createHashBien = [good.validateData, good.createHashGood];
exports.getHashProcesos = [good.validateData, good.getHashProcess];
