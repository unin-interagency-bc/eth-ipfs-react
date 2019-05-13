// //overrides metamask v0.2 for our 1.0 version.
//1.0 lets us use async and await instead of promises

import Web3 from 'web3';
//overrides metamask v0.2 for our v 1.0
// const provider = new Web3.providers.JsonRpcProvider({url: keys.ethereumProviderURL, user: keys.ethereumProviderUsername, password: keys.ethereumProviderPassword});
// const provider = new Web3.providers.HttpProvider('https://ropsten.infura.io');
const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);

const contracts = {
  StoreCertAndHash: {
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "ownerCertCount",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x3380da2a"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "certToOwner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x61c0ac9c"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "certHashes",
        "outputs": [
          {
            "name": "ipfsHash",
            "type": "string"
          },
          {
            "name": "data",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x86e4a22e"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xf851a440"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "certId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "ipfsHash",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "data",
            "type": "string"
          }
        ],
        "name": "NewCert",
        "type": "event",
        "signature": "0x9b494ea2de5f841d317272ca4cc8e762d73679e0ec7637f2f3eebe34e638c318"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_ipfsHash",
            "type": "string"
          },
          {
            "name": "_data",
            "type": "string"
          }
        ],
        "name": "_createCert",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x8016de4b"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "_getCert",
        "outputs": [
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x6c5e8a55"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "_getOwnerCount",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x7a02719d"
      }
    ],
    address: '0x7bf5b31a167D81dBc23912D8dd5cE671fEDAF8Eb'
  }
}

export {web3, contracts}
