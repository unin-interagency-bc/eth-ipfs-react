// import web3 from './web3';
// require('dotenv').config();
// const address = '0x87f74b6D00dD8bd8fF6E3B805BDA09CA34390258'
// //use the ABI from your contract
// const abi = [
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "ownerCertCount",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function",
//     "signature": "0x3380da2a"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "certToOwner",
//     "outputs": [
//       {
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function",
//     "signature": "0x61c0ac9c"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "certHashes",
//     "outputs": [
//       {
//         "name": "droneCorridor",
//         "type": "string"
//       },
//       {
//         "name": "ipfsHash",
//         "type": "string"
//       },
//       {
//         "name": "companyName",
//         "type": "string"
//       },
//       {
//         "name": "dateOfParticipation",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function",
//     "signature": "0x86e4a22e"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "name": "certId",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "name": "droneCorridor",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "name": "ipfsHash",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "name": "companyName",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "name": "date",
//         "type": "string"
//       }
//     ],
//     "name": "NewCert",
//     "type": "event",
//     "signature": "0x2343c6577192f7f88b89815009d11fc29b75ebce36ecfddd5c8b68eefcb32002"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "_droneCorridor",
//         "type": "string"
//       },
//       {
//         "name": "_ipfsHash",
//         "type": "string"
//       },
//       {
//         "name": "_companyName",
//         "type": "string"
//       },
//       {
//         "name": "_date",
//         "type": "string"
//       }
//     ],
//     "name": "_createCert",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function",
//     "signature": "0xdef29660"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "index",
//         "type": "uint256"
//       }
//     ],
//     "name": "_getCert",
//     "outputs": [
//       {
//         "name": "",
//         "type": "string"
//       },
//       {
//         "name": "",
//         "type": "string"
//       },
//       {
//         "name": "",
//         "type": "string"
//       },
//       {
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function",
//     "signature": "0x6c5e8a55"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "_getOwnerCount",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function",
//     "signature": "0x7a02719d"
//   }
// ]

// export default new web3.eth.Contract(abi, address);