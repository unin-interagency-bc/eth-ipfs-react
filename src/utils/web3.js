// //overrides metamask v0.2 for our 1.0 version.
//1.0 lets us use async and await instead of promises

import Web3 from 'web3';
//overrides metamask v0.2 for our v 1.0
// const provider = new Web3.providers.JsonRpcProvider({url: keys.ethereumProviderURL, user: keys.ethereumProviderUsername, password: keys.ethereumProviderPassword});
const provider = new Web3.providers.HttpProvider('https://ropsten.infura.io');
// const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);

const contracts = {
  StoreHashes: {
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
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
        "type": "event"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
      }
    ],
    address: '0xF9fFc4f383ACD5C19E9Fa0a13Fa0d400840A0e7f'
  }
}

export {web3, contracts}
