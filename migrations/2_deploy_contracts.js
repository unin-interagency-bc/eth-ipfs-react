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
    ipfsHash: "QmfSbnBFsHUihCeQpE3nRUM7iTYBWAf9okCKFsAFcqx1Kz",
      details: {
        'participantName': 'Antonia Charlemagne-Marshall',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },
    {      
    ipfsHash: "QmVWo92YooZgE9UEShSA3Wz2ydKnkVuwyBf1APQMB1F3nE",
      details: {
        'participantName': 'Anu Girija Senan',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },
    {      
    ipfsHash: "QmTeDX7mY7y7t14JR4XYGsMLa4pcu1Yfhc3Ze7Hxi7YHDA",
      details: {
        'participantName': 'Elena Flocos',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },
    {      
    ipfsHash: "QmSKuXzsjquRzN2TAra89id8YquBCygYu126doveRe8F7e",
      details: {
        'participantName': 'Eric Rodriguez',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },
    {      
    ipfsHash: "QmXjbP9aKp4qHqU3MRh7nNXRXAuskQquCJWrFkpSmWxyzu",
      details: {
        'participantName': 'Erica Choi',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },
    {   
    ipfsHash: "QmY8HjFoVstoJcEk1MLefSvAaM1f17aGRYXHntLoGnwj9o",
      details: {
        'participantName': 'Juan Manuel Merlos Tevar',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },
    {      
    ipfsHash: "QmRnfjwo1mUNFRnvCmb575UjpHyhemdHnQASMwjtpuT12S",
      details: {
        'participantName': 'Manish Swar',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },
    {      
    ipfsHash: "QmRBUVyBWGRkrjZ2RYnJUjkrkEWYyL9uh9d44srbhrh6Nc",
      details: {
        'participantName': 'Marcin Pawlowski',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },
    {      
    ipfsHash: "Qmdo9hfQ6Lq7UJSqZphtqEps9xZczE4kzuLKUHwKfngQFy",
      details: {
        'participantName': 'Prashant Menon',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },
    {      
    ipfsHash: "QmUxTR78ixu2J2Ufhb9ZRP1VAYMvHDZBJ2Wrv35bqxPEhK",
      details: {
        'participantName': 'Rodolfo Mascarenas',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },
    {      
    ipfsHash: "QmdYZLbayeDtYqvVcm6SBXz26vqN8kM1PnsHVgsBfCEHBG",
      details: {
        'participantName': 'Tejopriya Pamarthi',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },
    {      
    ipfsHash: "QmTUHjw6YevzYQVaEeH8B13UZPG9EYtyyayZsrRfkeu3Wc",
      details: {
        'participantName': 'Tom Buelens',
        'participationDate': "11/19/2019",
        'programmeName': "UN Innovation Network's Blockchain Learning Course"
      }
    },

];

  for(let i=0; i<certs.length; i++){
    const cert = certs[i];
    const encrypted_data = CryptoJS.AES.encrypt(JSON.stringify(cert.details), "XRxPzeZcxoukhsiX88npc7AL5cu5dDm7").toString()
    await instance._createCert(cert.ipfsHash, encrypted_data);
    console.log(cert);
  }

  // const cert = await instance._getCert(0)
};
