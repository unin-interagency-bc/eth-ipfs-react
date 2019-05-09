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
      "participantName": "Cyrus Agbegnigan",
      "participantOrganisation": "UNFPA",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "QmTf7WXKTwTPf1QvXMpkRHWH25Jz4ufZt34FQ1hdZjVBgQ",
    details: {
      "participantName": "Alexandra Tyers",
      "participantOrganisation": "UNICEF",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "QmdVTGAWoFJL6XtF9XNuq6pkd2cpxCXaFq1y5rPNyXts3x",
    details: {
      "participantName": "Nwando Dike",
      "participantOrganisation": "UNICEF",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "QmWTD6EVyAP3ERNhxQHXhq67yzEG7VvJQFg6GrbcXBz1RF",
    details: {
      "participantName": "Gerda Binder",
      "participantOrganisation": "UNICEF",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },

  {
    ipfsHash: "Qmf9dT8eNZN6YEC3Yrcr4HpXCLmvQDeTJtHxcmbAbjzCeB",
    details: {
      "participantName": "Adama Sawadogo",
      "participantOrganisation": "iCIVIL",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "Qmbpz5ocCDTFsNwRH8ivoKTo8oUo8eaWBD3RMWUQ9W1Vam",
    details: {
      "participantName": "Waly Sene",
      "participantOrganisation": "UNFPA",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "QmenR1XQQjNE6wBcsAPWrBa1V1B5Dst7pPzKoqjE7VSNVW",
    details: {
      "participantName": "Jason Slater",
      "participantOrganisation": "UNIDO",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "QmfTpeZLVhrmPgh1oG41sdrYEf6ynUy6xHCCM3QfV9XZCu",
    details: {
      "participantName": "Giulia Moscardelli",
      "participantOrganisation": "UNIDO",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "QmR2iQvYkkgfw5KVAgzFW5KoTZQuGk4kag7H8GVgR6SYsx",
    details: {
      "participantName": "Fukuya Iino",
      "participantOrganisation": "UNIDO",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },

  {
    ipfsHash: "QmVhM4Zr25Vbk7zCi5vfDruWj1zosnBKCfQ7SZhCY4Ccwg",
    details: {
      "participantName": "Daiva Kazdaile",
      "participantOrganisation": "UNOG",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "QmdKLsooqsx1tcnbqu9uy5bcHYWRw2RW33kYsFLHzaysHH",
    details: {
      "participantName": "Frank Moser",
      "participantOrganisation": "UNOG",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "QmXs7pCWvXHicsfJa8wPkJDVDq2JwCdGq4xEy5WvBtSboG",
    details: {
      "participantName": "Michelle Keating",
      "participantOrganisation": "UNOG",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "QmVP3epxqYwxyJvp6Uf3U7JsyWXybRTXhFoTE2tDmWcBwT",
    details: {
      "participantName": "Sofia Lobanova Zick",
      "participantOrganisation": "UNOG",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },

  {
    ipfsHash: "QmS13bR4aGMDm2odwNPLukfQAbP6RhkSwafkdpx9KPqam3",
    details: {
      "participantName": "Andrew Campbell",
      "participantOrganisation": "Applied Blockchain",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "Qmbp8U78f7ZdjEbVXCT3LdV4H11sAwySUQVSFg8qKoyy4c",
    details: {
      "participantName": "Christina Lomazzo",
      "participantOrganisation": "UNICEF",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "QmYamEiKhUM4g9YPt8bUdqY5SkHbjyKWbUeV35QCWKhG5V",
    details: {
      "participantName": "Mehran Hydary",
      "participantOrganisation": "UNICEF",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "Qmf69rtDMM4M28Cd7UHFdAXYQjJXtgSh86tFKShTouu8NT",
    details: {
      "participantName": "Ariana Fowler",
      "participantOrganisation": "UNICEF",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  },
  {
    ipfsHash: "QmRCBmdHSUHnFwXNo3HHNcbSbKNrdBi9oKnoy5eC11TdvW",
    details: {
      "participantName": "Gustav Stromfelt",
      "participantOrganisation": "UN WFP",
      "participationDate": new Date('2019-04-29').getTime(),
      "programmeName": "Interagency Innovation Bootcamp 2019"
    },
  }];

  for(let i=0; i<certs.length; i++){
    const cert = certs[i];
    const encrypted_data = CryptoJS.AES.encrypt(JSON.stringify(cert.details), "XRxPzeZcxoukhsiX88npc7AL5cu5dDm7").toString()
    await instance._createCert(cert.ipfsHash, encrypted_data);
    console.log(cert);
  }

  // const cert = await instance._getCert(0)
};
