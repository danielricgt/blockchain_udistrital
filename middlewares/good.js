const blockchain = require("../tools/blockchain")

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

async function createGood(req,res){
  let contract = await blockchain.smartContract()
  let hash = await blockchain.getHashBien(contract)
  console.log(hash);
 // let result =  await goodController.createGood(req.objects.good);
 //res.json(result);
 res.json({s: "ssdsd"});
}

async function getHashGood(req,res){
  let contract = await blockchain.smartContract();
  let hash = await blockchain.getHashBien(contract);
  res.json({ hash: `${hash}` })
}


module.exports = {
  validateData,
  createGood,
  getHashGood,
};