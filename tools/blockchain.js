const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
const abiSmartContrac = require("../truffle/build/contracts/Bienes.json");

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

async function smartContract() {
  const abi = abiSmartContrac;
  const contract = new web3.eth.Contract(abi, "0xdEa71833dEF4093F3c5418254CEEc74762021461");
  return contract;
}

async function getHashBien(contract) {
  console.log(contract.methods);
  const hash = await contract.methods.getHash().call();
  return hash;
}

async function createHashBien(contract){
  //console.log(contract.methods);
  contract.methods.generateHashVal("Hello","2","2","2","2","2","2","2").send({from:"0xBB67Fc057F46a02BeA200a81A1AcE8365C1f2C1D"}, function(){
    myContract.methods.getHash().call((error, result) => {console.log(result)})
  })

}



module.exports = {
    smartContract,
    getHashBien,
    createHashBien
};
