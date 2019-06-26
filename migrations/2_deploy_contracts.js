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
    ipfsHash: "QmXYxGk64v8LdKQ51SMaBSC7JX6G4GxV3sTzaA2GPyqGSN",
      details: {
        'participantName': 'Yalta Zhu',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {      
    ipfsHash: "QmXLS1qr6oNNa9qX8yfk2tbj6Kh5SeQxRhpv3VXG7EFAXm",
      details: {
        'participantName': 'Yiping Wang',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {      
    ipfsHash: "QmSnvprgmVTNC7AthZxHbeaiMLQk2YLmMQz6aBrvjPeHoP",
      details: {
        'participantName': 'Yi-Syuan (Tina) Chen',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {      
    ipfsHash: "QmVtwFph6p5DUZLw8T7Ez2PstosZ6BqMX5an2Nhozoys1e",
      details: {
        'participantName': 'Yi-Yuan (Nancy) Chiu',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {      
    ipfsHash: "QmPCkftCbpCXtQt3jhvNXq7vypByQk6hCwWnTAboeUfEJJ",
      details: {
        'participantName': 'Yan Huang',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {   
    ipfsHash: "QmYZditUJSc4nCfLkMUbtT6tUJV9y2Ni6tB73Ns27PN5zb",
      details: {
        'participantName': 'Man-Ping Wu',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {      
    ipfsHash: "QmWirUiZTrKis7N7VYnX2H5sKXdX4UiPAXD9VEa4A6SRLa",
      details: {
        'participantName': 'Moeezo Saleen',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {      
    ipfsHash: "QmbfdLNZ5tDTRqkZrjhJQgX384pJzwLczoWSCMUFpw4eeF",
      details: {
        'participantName': 'Maria Rojas',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {      
    ipfsHash: "QmbkB6T35eZPf4vUyyaPhve3UsjaDkutQrxHyykyztkfzR",
      details: {
        'participantName': 'Evelyn Xu',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {      
    ipfsHash: "QmfARQPW82suuRcuEdtDrEezXsA4A61zG5Z1DMtK8sXAbB",
      details: {
        'participantName': 'Brittney Atkinson-McFarlane',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {      
    ipfsHash: "QmURSXbZ6ijbswLbFoT2UVfYcnq4H4uPu7Pgn5P6zqpuNz",
      details: {
        'participantName': 'Alex Santarelli',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {      
    ipfsHash: "QmdGU8x4HgXjSRTWaBPGk5qxCYqG6hhbnmd5QYeJ8Hd7cH",
      details: {
        'participantName': 'Ahmed Razin',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    },
    {      
    ipfsHash: "QmSt9KpHBsw8PWTWuofP7GkUYXsuv9rLpH7SJHM37gsPnc",
      details: {
        'participantName': 'Abhiroop CVK',
        'participationDate': new Date().getTime(),
        'programmeName': 'UN-chained: Assessing emerging technologies for social good'
      }
    }
];

  for(let i=0; i<certs.length; i++){
    const cert = certs[i];
    const encrypted_data = CryptoJS.AES.encrypt(JSON.stringify(cert.details), "XRxPzeZcxoukhsiX88npc7AL5cu5dDm7").toString()
    await instance._createCert(cert.ipfsHash, encrypted_data);
    console.log(cert);
  }

  // const cert = await instance._getCert(0)
};
