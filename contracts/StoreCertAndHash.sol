pragma solidity ^0.5.0;

// This smart contract will be used to store contracts for NYU Course Participants

// The contract will store data and an ipfsHash
// The data will be hashed from whatever is passed in to track each student

contract StoreCertAndHash {
    event NewCert(uint certId, string ipfsHash, string data);

    struct CertHash {
        string ipfsHash;
        string data;
    }
    CertHash[] public certHashes;

    address public admin;
    mapping(uint => address) public certToOwner;
    mapping (address => uint) public ownerCertCount;

    constructor() public {
      admin = msg.sender;
    }

    modifier onlyAdmin {
        // This should be the UNICEF admin
      require(msg.sender == admin, "Only admin can call this method");
      _;
    }

    function _createCert(string memory _ipfsHash, string memory _data) public onlyAdmin {
        uint id = certHashes.push(CertHash(_ipfsHash, _data)) - 1;
        certToOwner[id] = msg.sender;
        ownerCertCount[msg.sender]++;
        emit NewCert(id, _ipfsHash, _data);
    }

    function _getCert(uint index) public view returns(string memory, string memory) {
        return (
            certHashes[index].ipfsHash,
            certHashes[index].data
        );
    }

    function _getOwnerCount () public view returns (uint) {
        return ownerCertCount[msg.sender];
    }
}
