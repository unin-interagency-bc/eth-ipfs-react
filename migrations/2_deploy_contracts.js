"use strict";
// const StoreHash = artifacts.require("StoreHash");
const StoreHashes = artifacts.require("StoreHashes");

console.log('Entering the second migration')

module.exports = async (deployer) => {
  await deployer.deploy(StoreHashes)
  const instance = await StoreHashes.deployed()
  const certDetails = {
    "participantName": "andy",
    "participantOrganisation": "ab",
    "participationDate": new Date().getTime(),
    "programmeName": "un bootcamp"
  }
  await instance._createCert("abc", JSON.stringify(certDetails));
  const cert = await instance._getCert(0)
  console.log(cert)
};
