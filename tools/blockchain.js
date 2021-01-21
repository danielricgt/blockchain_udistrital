const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
const abiSmartContrac = require("../truffle/build/contracts/Bienes.json");
const abiSmartContracP = require("../truffle/build/contracts/procesos_hash.json");

async function getBalance(address) {
  try {
    const result = await web3.eth.getBalance(address);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function balanceUnit(balance, unit) {
  try {
    const result = await web3.utils.fromWei(balance, unit);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function smartContract(contract) {
  let smartcontract 
  switch (contract) {
    case "GOOD":
      const abi = abiSmartContrac;
      smartcontract = new web3.eth.Contract(abi, "0xdEa71833dEF4093F3c5418254CEEc74762021461");
      break;
    case "PROCESS":
      const abip = abiSmartContracP;
      smartcontract = new web3.eth.Contract(abip, "0x8A5fa9313D3B99Ab2c3097a2e2E0CB93CfFE41Fa");
      break;
  }
  return smartcontract;
}

async function getHashBien(contract) {
  console.log(contract.methods);
  const hash = await contract.methods.getHash().call();
  return hash;
}

async function createHashBien(contract,id,descripcion,placa,sede,inventory,space,marcaserie,state){
  try {
    let getData = await contract.methods.generateHashVal(id,descripcion,placa,sede,inventory,space,marcaserie,state).send({from:"0xBB67Fc057F46a02BeA200a81A1AcE8365C1f2C1D"})
    return await getHashBien(contract)
  
  } catch (error) {
    console.error;
  }
}

async function getHashProcesos(contract) {
  console.log(contract.methods);
  const hash = await contract.methods.getHash().call();
  return hash;
}


module.exports = {
    smartContract,
    getHashBien,
    createHashBien,
    getHashProcesos
};
