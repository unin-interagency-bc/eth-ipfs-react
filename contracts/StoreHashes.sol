pragma solidity ^0.5.0;

contract StoreHashes {
	event NewCert(uint certId, string droneCorridor, string ipfsHash);
	
	struct CertHash {
		string droneCorridor;
		string ipfsHash;
	}

 	CertHash[] public certHashes;

 	mapping(uint => address) public certToOwner;
 	mapping (address => uint) public ownerCertCount;

 	function _createCert(string memory _droneCorridor, string memory _ipfsHash) public {
 		uint id = certHashes.push(CertHash(_droneCorridor, _ipfsHash)) - 1;
        certToOwner[id] = msg.sender;
        ownerCertCount[msg.sender]++;
        emit NewCert(id, _droneCorridor, _ipfsHash);
 	}
 	function _getCert(uint index) public view returns(string memory, string memory) {
        return (certHashes[index].droneCorridor, certHashes[index].ipfsHash);
    }
    function _getOwnerCount () public view returns (uint) {
    	return ownerCertCount[msg.sender];
    }

}