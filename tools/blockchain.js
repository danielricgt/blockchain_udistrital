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
  const contract = new web3.eth.Contract(abi, "0x1276980a2b61ea608e23e3D5B4438bA05570aa15");
  return contract;
}

async function getHashBien(contract) {
  console.log(contract.methods);
  const hash = await contract.methods.getHash().call();
  return hash;
}

async function createHashBien(contract){
  //en este metodo trabajamos en eth.send()
}



module.exports = {
    smartContract,
    getHashBien,
    createHashBien
};
