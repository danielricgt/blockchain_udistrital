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
  let hash = await blockchain.createHashProceso(
    contract,
    process.id,
    process.start_date,
    process.end_date,
    process.description,
    process.reason,
    process.hashb,
    process.fk_person,
    process.fk_good,
    process.hash_ipfs
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
