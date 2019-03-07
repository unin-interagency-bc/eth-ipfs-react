pragma solidity ^0.5.0;

contract StoreHashes {
    event NewCert(uint certId, string droneCorridor, string ipfsHash, string companyName, string date);
	
    struct CertHash {
        string droneCorridor;
        string ipfsHash;
        string companyName;
        string dateOfParticipation;
    }

    CertHash[] public certHashes;

    mapping(uint => address) public certToOwner;
    mapping (address => uint) public ownerCertCount;

    function _createCert(string memory _droneCorridor, string memory _ipfsHash, string memory _companyName, string memory _date) public {
        uint id = certHashes.push(CertHash(_droneCorridor, _ipfsHash, _companyName, _date)) - 1;
        certToOwner[id] = msg.sender;
        ownerCertCount[msg.sender]++;
        emit NewCert(id, _droneCorridor, _ipfsHash, _companyName, _date);
    }
    
    function _getCert(uint index) public view returns(string memory, string memory, string memory, string memory) {
        return (
            certHashes[index].droneCorridor, 
            certHashes[index].ipfsHash, 
            certHashes[index].companyName, 
            certHashes[index].dateOfParticipation
        );
    }
    
    function _getOwnerCount () public view returns (uint) {
        return ownerCertCount[msg.sender];
    }
}