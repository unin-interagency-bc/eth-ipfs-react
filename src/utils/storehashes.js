import web3 from './web3';

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0xBbb3cD8055A4a7D6F24f7475733cdD4694992045';
//use the ABI from your contract
const abi = [
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
          "name": "droneCorridor",
          "type": "string"
        },
        {
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x86e4a22e"
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
          "name": "droneCorridor",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "ipfsHash",
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
          "name": "_droneCorridor",
          "type": "string"
        },
        {
          "name": "_ipfsHash",
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
]

export default new web3.eth.Contract(abi, address);