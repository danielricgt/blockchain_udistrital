const blockchain = require("../tools/blockchain");

async function validateData(req, res, next) {
  req.objects = {};
  if (req.method === "POST") {
    req.objects.process = req.body;
  } else if (req.method === "GET") {
    req.objects.process = req.query;
  } else if (req.method === "PUT") {
    req.objects.id == req.query.id;
    req.objects.process = req.body;
  }
  next();
}

async function createHashProcess(req, res) {
  let process = req.objects.process;
  console.log("data  enviada: ", process);
  let contract = await blockchain.smartContract("PROCESS");
  let hash = await blockchain.createHashProcess(
    contract,
    process.id,
    process.descripcion,
    process.placa,
    process.sede,
    process.inventory,
    process.space,
    process.marcaserie,
    process.state
  );
  console.log("response", hash);
  res.json({ create: `${hash}` });
}

async function getHashProcess(req, res) {
  let contract = await blockchain.smartContract("PROCESS");
  let hash = await blockchain.getHashProcesos(contract);
  res.json({ hash: `${hash}` });
}

module.exports = {
  validateData,
  createHashProcess,
  getHashProcess,
};
