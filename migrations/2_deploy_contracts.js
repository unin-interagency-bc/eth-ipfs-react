"use strict";
const StoreCertAndHash = artifacts.require("StoreCertAndHash");
const CryptoJS = require("crypto-js")

console.log('Entering the second migration')

module.exports = async (deployer) => {
  await deployer.deploy(StoreCertAndHash)
  const instance = await StoreCertAndHash.deployed()

  // This information has to be updated
  // Will need to get name, course name, participation date
  const certs = [
    {
    ipfsHash: "QmXg2pkhyFQVM6Ez9dGNcJpuFVFvGSmVvYytkok9x2Xow9", // Will have to update the hash
    details: {
      "participantName": "Cyrus Agbegnigan", // Will have to change nwame
      "participationDate": new Date().getTime(),
      "programmeName": "UN-chained: Assessing emerging technologies for social good"
    },
  },
  {
    ipfsHash: "QmTf7WXKTwTPf1QvXMpkRHWH25Jz4ufZt34FQ1hdZjVBgQ", // Will have to update the hash
    details: {
      "participantName": "Cyrus Agbegnigan", // Will have to change nwame
      "participationDate": new Date().getTime(),
      "programmeName": "UN-chained: Assessing emerging technologies for social good"
    },
    // Add as many more as needed
  }];

  for(let i=0; i<certs.length; i++){
    const cert = certs[i];
    const encrypted_data = CryptoJS.AES.encrypt(JSON.stringify(cert.details), "XRxPzeZcxoukhsiX88npc7AL5cu5dDm7").toString()
    await instance._createCert(cert.ipfsHash, encrypted_data);
    console.log(cert);
  }

  // const cert = await instance._getCert(0)
};
