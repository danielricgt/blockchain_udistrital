const blockchain = require("../tools/blockchain");

async function validateData(req, res, next) {
  req.objects = {};
  if (req.method === "POST") {
    req.objects.good = req.body;
  } else if (req.method === "GET") {
    req.objects.good = req.query;
  } else if (req.method === "PUT") {
    req.objects.id == req.query.id;
    req.objects.good = req.body;
  }
  next();
}

async function createHashGood(req, res) {
  let contract = await blockchain.smartContract();
  let hash = await blockchain.createHashBien(contract);
  console.log("response", hash);
  res.json({ create: `${hash}` });
}

async function getHashGood(req, res) {
  let good = req.objects.good;
  console.log("data  enviada: ",good);
  let contract = await blockchain.smartContract();
  let hash = await blockchain.getHashBien(
    contract,
    good.id,
    good.descripcion,
    good.placa,
    good.sede,
    good.inventory,
    good.space,
    good.marcaserie,
    good.state
  );
  res.json({ hash: `${hash}` });
}

module.exports = {
  validateData,
  createHashGood,
  getHashGood,
};
