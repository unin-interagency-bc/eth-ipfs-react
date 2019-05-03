"use strict";
// const StoreHash = artifacts.require("StoreHash");
const StoreHashes = artifacts.require("StoreHashes");
const CryptoJS = require("crypto-js")

console.log('Entering the second migration')

module.exports = async (deployer) => {
  await deployer.deploy(StoreHashes)
  const instance = await StoreHashes.deployed()

  const certs = [
    {
      ipfsHash: "QmXg2pkhyFQVM6Ez9dGNcJpuFVFvGSmVvYytkok9x2Xow9",
      details: {
        "participantName": "CYRUS AGBEGNIGAN",
        "participantOrganisation": "UNFPA",
        "participationDate": new Date('2019-04-29').getTime(),
        "programmeName": "Interagency Innovation Bootcamp 2019"
      },
    },
    {
      ipfsHash: "QmVP3epxqYwxyJvp6Uf3U7JsyWXybRTXhFoTE2tDmWcBwT",
      details: {
        "participantName": "SOFIA LOBANOVA ZICK",
        "participantOrganisation": "UNOG",
        "participationDate": new Date('2019-04-29').getTime(),
        "programmeName": "Interagency Innovation Bootcamp 2019"
      }
    },
    {
      ipfsHash: "QmenR1XQQjNE6wBcsAPWrBa1V1B5Dst7pPzKoqjE7VSNVW",
      details: {
        "participantName": "JASON SLATER",
        "participantOrganisation": "UNIDO",
        "participationDate": new Date('2019-04-29').getTime(),
        "programmeName": "Interagency Innovation Bootcamp 2019"
      }
    }
  ]

  for(let i=0; i<3; i++){
    const cert = certs[i];
    const encrypted_data = CryptoJS.AES.encrypt(JSON.stringify(cert.details), "XRxPzeZcxoukhsiX88npc7AL5cu5dDm7").toString()
    await instance._createCert(cert.ipfsHash, encrypted_data);
  }

  // const cert = await instance._getCert(0)
};
